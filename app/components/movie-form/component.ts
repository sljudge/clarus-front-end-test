import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
// @ts-expect-error - no types for package(?)
import podNames from 'ember-component-css/pod-names';
import { service } from '@ember/service';

import type { Firebase, MovieSnapshot } from 'types';

interface MovieFormSignature {
  Args: {
    activeMovie?: MovieSnapshot;
    status: 'add' | 'edit' | null;
    loadMovies(): void;
  };
  Blocks: {
    default: [title: string, description: string, errorMessage: string];
  };
  Element: HTMLFormElement;
}

export default class MovieForm extends Component<MovieFormSignature> {
  styleNamespace = podNames['movie-form'];

  @service firebase: Firebase;

  @tracked description: string | undefined =
    this.args.activeMovie?.data().description;

  @tracked title: string | undefined = this.args.activeMovie?.data().title;

  @tracked errorMessage: string | undefined;

  @action
  async addMovie(event: SubmitEvent) {
    event.preventDefault();

    this.errorMessage = undefined;

    try {
      const { description, title } = this;

      if (!description || !title) {
        this.errorMessage = 'Title and description are required';
        return;
      }

      await this.firebase.addMovie(title, description);

      this.description = undefined;
      this.title = undefined;

      this.args.loadMovies();
    } catch (error: any) {
      this.errorMessage = error?.message;
    }
  }

  get ctaText() {
    return this.args.status === 'add'
      ? 'Add movie'
      : this.args.status === 'edit'
        ? 'Edit movie'
        : '';
  }
}

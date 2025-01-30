import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
// @ts-expect-error - no types for package(?)
import podNames from 'ember-component-css/pod-names';
import { service } from '@ember/service';

import type { Firebase } from 'types';

interface AddMovieFormSignature {
  Args: {
    loadMovies(): void;
  };
  Blocks: {
    default: [
      title: string, 
      description: string,
      errorMessage: string
    ];
  };
  Element: HTMLFormElement;
}

export default class AddMovieForm extends Component<AddMovieFormSignature> {
  styleNamespace = podNames['add-movie-form'];

  @service firebase:Firebase;

  @tracked description: string | undefined;

  @tracked title: string | undefined;

  @tracked errorMessage:string | undefined;

  @action
  async addMovie(event:SubmitEvent) {
    event.preventDefault();

    this.errorMessage = undefined;

    try {
      const { description, title } = this;

      if(!description || !title){
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
}

import Component from '@glimmer/component';
// @ts-expect-error - no types for package(?)
import podNames from 'ember-component-css/pod-names';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

interface MovieListSearchInputSignature {
  Args: {
    searchTerm?: string;
    onSubmit(searchTerm: string): void;
  };
  Blocks: {};
  Element: HTMLFormElement;
}

export default class MovieListSearchInput extends Component<MovieListSearchInputSignature> {
  styleNamespace = podNames['movie-list-search-input'];

  @action handleOnSubmit(event: Event) {
    event.preventDefault();
    this.args.onSubmit(this.args.searchTerm ?? '');
  }
}

import Component from '@glimmer/component';
// @ts-expect-error - no types for package(?)
import podNames from 'ember-component-css/pod-names';

interface AddNewMovieCtaSignature {
  Args: {
    onClick(): void;
  };
  Blocks: {};
  Element: HTMLLIElement;
}

export default class AddNewMovieCta extends Component<AddNewMovieCtaSignature> {
  styleNamespace = podNames['movie-list/add-new-movie-cta'];
}

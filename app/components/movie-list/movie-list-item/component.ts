import { action } from '@ember/object';
import Component from '@glimmer/component';
// @ts-expect-error - no types for package(?)
import podNames from 'ember-component-css/pod-names';
import type { Movie, MovieSnapshot } from 'types';

interface MovieListItemSignature {
  Args: {
    movie: MovieSnapshot;
    onClick(movie?: MovieSnapshot): void;
  };
  Blocks: {
    default: [movie: Movie];
  };
  Element: HTMLFormElement;
}

export default class MovieListItem extends Component<MovieListItemSignature> {
  styleNamespace = podNames['movie-list/movie-list-item'];

  @action handleOnClick() {
    this.args.onClick(this.args.movie);
  }

  get movie() {
    return this.args.movie.data();
  }
}

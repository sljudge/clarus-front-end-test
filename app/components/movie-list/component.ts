import Component from '@glimmer/component';
// @ts-expect-error - no types for package(?)
import podNames from 'ember-component-css/pod-names';

import type { MovieSnapshot } from 'types';

interface MovieListSignature {
  Args: {
    movies: MovieSnapshot[];
    handleAddMovieClick(): void;
    handleEditMovieClick(movie: MovieSnapshot): void;
  };
  Blocks: {};
  Element: HTMLUListElement;
}

export default class MovieList extends Component<MovieListSignature> {
  styleNamespace = podNames['movie-list'];
}

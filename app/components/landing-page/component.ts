import { action } from '@ember/object';
import { collection, getFirestore, getDocs } from 'firebase/firestore';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
// @ts-expect-error - no types for package(?)
import podNames from 'ember-component-css/pod-names';
import type { Movie, MovieSnapshot } from 'types';

interface LandingPageSignature {
  Args: {};
  Blocks: {
    default: [movies: Movie[]];
  };
  Element: HTMLDivElement;
}

export default class LandingPage extends Component<LandingPageSignature> {
  styleNamespace = podNames['landing-page'];

  @tracked allMovies: MovieSnapshot[] = [];

  @tracked filteredMovies: MovieSnapshot[] = [];

  @tracked movieFormStatus: 'add' | 'edit' | null = null;

  @tracked activeMovie: MovieSnapshot | undefined;

  @tracked searchTerm: string = '';

  @action async loadMovies() {
    const db = getFirestore();
    const moviesRef = collection(db, 'movies');
    const moviesSnapshot = await getDocs(moviesRef);
    const movies: MovieSnapshot[] = [];

    moviesSnapshot.forEach((doc) => movies.push(doc as MovieSnapshot));

    this.allMovies = movies;
    this.closeMovieForm();
  }

  @action closeMovieForm() {
    this.movieFormStatus = null;
  }

  @action openAddMovieForm() {
    this.activeMovie = undefined;
    this.movieFormStatus = 'add';
  }

  @action openEditMovieForm(movie: MovieSnapshot) {
    this.activeMovie = movie;
    this.movieFormStatus = 'edit';
  }

  constructor(owner: unknown, args: {}) {
    super(owner, args);

    this.loadMovies();
  }

  get movies() {
    if (this.searchTerm.length > 0) {
      return this.allMovies.filter(
        (movie) =>
          movie
            .get('title')
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase()) ||
          movie
            .get('description')
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase()),
      );
    } else {
      return this.allMovies;
    }
  }
}

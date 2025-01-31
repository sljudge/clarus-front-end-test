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

  /**
   * Once there are added movies this tracked property will contain an array of
   * objects with a `data` method and `ref` property.
   *
   * The ref can be used with the firestore method `updateDoc` to update the record:
   *
   *   await updateDoc(movie.ref, { title: 'Updated Title' });
   *
   * The ref can also be used with the firestore method `deleteDoc` to delete the record:
   *
   *   await deleteDoc(movie.ref);
   *
   */
  @tracked movies: MovieSnapshot[] = [];

  @tracked movieFormStatus: 'add' | 'edit' | null = null;

  @tracked activeMovie: MovieSnapshot | undefined;

  @action async loadMovies() {
    const db = getFirestore();
    const moviesRef = collection(db, 'movies');
    const moviesSnapshot = await getDocs(moviesRef);
    const movies: MovieSnapshot[] = [];

    moviesSnapshot.forEach((doc) => movies.push(doc as MovieSnapshot));

    this.movies = movies;
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
}

import type { QueryDocumentSnapshot } from 'firebase/firestore';

export type Movie = {
  title: string;
  description: string;
  rating?: string;
};

export type MovieSnapshot = QueryDocumentSnapshot<Movie>;

export interface Firebase {
  addMovie(data: Movie): Promise<any>;
  deleteMovie(movie: MovieSnapshot): Promise<any>;
  updateMovie(ref: MovieSnapshot['ref'], data: Movie): Promise<any>;
}

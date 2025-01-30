import type { QueryDocumentSnapshot } from 'firebase/firestore';

export type Movie = {
  title: string;
  description: string;
};

export type MovieSnapshot = QueryDocumentSnapshot<Movie>;

export interface Firebase {
  addMovie(title: string, description: string): void;
}

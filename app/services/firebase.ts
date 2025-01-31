import {
  addDoc,
  deleteDoc,
  updateDoc,
  collection,
  Firestore,
  getFirestore,
} from 'firebase/firestore';
import config from 'ember-quickstart/config/environment';
import Service from '@ember/service';
import type { MovieSnapshot, Movie } from 'types';

export default class FirebaseService extends Service {
  db = config.environment === 'test' ? undefined : getFirestore();

  async addMovie(title: string, description: string) {
    await addDoc(collection(this.db as Firestore, 'movies'), {
      description,
      title,
    });
  }

  async deleteMovie(movie: MovieSnapshot) {
    await deleteDoc(movie.ref);
  }

  async updateMovie(ref: MovieSnapshot['ref'], data: Movie) {
    await updateDoc(ref, data);
  }
}

import {
  addDoc,
  collection,
  Firestore,
  getFirestore,
} from 'firebase/firestore';
import config from 'ember-quickstart/config/environment';
import Service from '@ember/service';

export default class FirebaseService extends Service {
  db = config.environment === 'test' ? undefined : getFirestore();

  async addMovie(title: string, description: string) {
    await addDoc(collection(this.db as Firestore, 'movies'), {
      description,
      title,
    });
  }
}

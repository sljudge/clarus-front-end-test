import { addDoc, collection, getFirestore } from 'firebase/firestore';
import config from 'ember-quickstart/config/environment';
import Service from '@ember/service';

export default class FirebaseService extends Service {
  db = config.environment === 'test' ? undefined : getFirestore();

  async addMovie(title, description) {
    await addDoc(collection(this.db, 'movies'), { description, title });
  }
}

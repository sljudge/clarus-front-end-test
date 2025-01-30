import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import Route from '@ember/routing/route';
import { getOwner } from '@ember/application';

export default class WmsRoute extends Route {
  beforeModel() {
    const environment =
      getOwner(this).resolveRegistration('config:environment');

    initializeApp(environment.firebase);
  }
}

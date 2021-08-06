import firebase from 'firebase';
import { firebaseConfig } from '../config/firebase.config';

export const appInitialiser = () => {

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  var auth = firebase.auth();
  auth.useEmulator('http://localhost:9099');
}
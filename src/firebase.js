import firebase from 'firebase';
import 'firebase/firestore';
import config from '../config';

firebase.initializeApp(config);

export default firebase.firestore();
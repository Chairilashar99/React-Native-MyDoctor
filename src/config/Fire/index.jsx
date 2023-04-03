import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

firebase.initializeApp({
  apiKey: 'AIzaSyB1JepfV2TVMN-Sx7CZ1Kyxr0tocBTWCBk',
  authDomain: 'my-doctor-01-a3219.firebaseapp.com',
  databaseURL:
    'https://my-doctor-01-a3219-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'my-doctor-01-a3219',
  storageBucket: 'my-doctor-01-a3219.appspot.com',
  messagingSenderId: '909764655983',
  appId: '1:909764655983:web:3f5dbc38793e26aaed469a',
});

const Fire = firebase;

export default Fire;

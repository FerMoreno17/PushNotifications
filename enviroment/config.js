import * as firebase from 'firebase';
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyA71D6SSVK9bJB46F8iFg2tNFPHTr04Nqg',
  authDomain: 'pushnot-4a9f9.firebaseapp.com',
  projectId: 'pushnot-4a9f9',
  storageBucket: 'pushnot-4a9f9.appspot.com',
  messagingSenderId: '1071680076499',
  appId: '1:1071680076499:web:5eff090aca5253b0d13226',
  measurementId: 'G-BM28GS84KG',
};

const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseapp);

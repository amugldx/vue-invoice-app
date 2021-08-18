import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
	apiKey: 'AIzaSyAEDT4qV4744oIsyUt1dMkIFFL7EiG4AkU',
	authDomain: 'invoice-vue-c85b5.firebaseapp.com',
	projectId: 'invoice-vue-c85b5',
	storageBucket: 'invoice-vue-c85b5.appspot.com',
	messagingSenderId: '760257359553',
	appId: '1:760257359553:web:7837a12a4b18f27afbae40',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();

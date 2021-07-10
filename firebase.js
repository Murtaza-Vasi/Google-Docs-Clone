import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyB38Sl4ClJgTvl3ZSoR28PfsgoZQjREKuY',
	authDomain: 'docs-clone-3f37b.firebaseapp.com',
	projectId: 'docs-clone-3f37b',
	storageBucket: 'docs-clone-3f37b.appspot.com',
	messagingSenderId: '838044003286',
	appId: '1:838044003286:web:caefb6ae76f8d782261277',
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();

export { db };
export default app;

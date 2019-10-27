import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBRj9OW-HMWPwe-7DhZgQWMV8BpgUTktQs',
  authDomain: 'head-to-head-45962.firebaseapp.com',
  databaseURL: 'https://head-to-head-45962.firebaseio.com',
};

// Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyBRj9OW-HMWPwe-7DhZgQWMV8BpgUTktQs",
//   authDomain: "head-to-head-45962.firebaseapp.com",
//   databaseURL: "https://head-to-head-45962.firebaseio.com",
//   projectId: "head-to-head-45962",
//   storageBucket: "head-to-head-45962.appspot.com",
//   messagingSenderId: "134529039919",
//   appId: "1:134529039919:web:b26790c0259429469890da"
// };

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;

// references to out children in our database
// export const headToHeadsRef = ref.child('headToHeads');
// export const playersRef = ref.child('players');
// export const gamesRef = ref.child('games');

export function auth(email: string, pw: string) {
  return firebaseAuth()
    .createUserWithEmailAndPassword(email, pw)
    .then(saveUser);
}

export function login(email: string, pw: string) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw);
}

export function logout() {
  return firebaseAuth().signOut();
}

export function resetPassword(email: string) {
  return firebaseAuth().sendPasswordResetEmail(email);
}

export function off() {
  return ref.off();
}

export function saveUser(user: any) {
  return ref
    .child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid,
    })
    .then(() => user);
}

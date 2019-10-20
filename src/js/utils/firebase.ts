import * as firebase from 'firebase'

const config = {
  apiKey: 'XXX',
  authDomain: 'your-app.firebaseapp.com',
  databaseURL: 'https://your-app.firebaseio.com',
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

// references to out children in our database
// export const headToHeadsRef = ref.child('headToHeads');
// export const playersRef = ref.child('players');
// export const gamesRef = ref.child('games');

export function auth(email: any, pw: any) {
  return firebaseAuth()
    .createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
}

export function login(email: any, pw: any) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function logout() {
  return firebaseAuth().signOut()
}

export function resetPassword(email: any) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function off() {
  return ref.off()
}

export function saveUser(user: any) {
  return ref
    .child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid,
    })
    .then(() => user)
}

import firebase from 'firebase'
import firebaseConfig from '../../config/firebase'
const appFirebase = firebase.initializeApp(firebaseConfig)
export async function auth() {
  try {
    await appFirebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
  } catch (error) {
    console.log(error)
  }

}

export async function signInWithEmailAndPassword(email, password) {
  try {
    await appFirebase.auth().signInWithEmailAndPassword(email, password)
  } catch (error) {
    console.log(error)
  }
}

export async function createUserWithEmailAndPassword(email, password) {
  try {
    await appFirebase.auth().createUserWithEmailAndPassword(email, password)
  } catch (error) {
    console.log(error)
  }
}

export function user() {
  return appFirebase.auth().currentUser
}

export default appFirebase
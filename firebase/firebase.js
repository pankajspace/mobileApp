import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const Firebase = {
  // auth
  loginWithEmail: (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  },
  sendPasswordResetEmail:(email) => {
    return firebase.auth().sendPasswordResetEmail(email);
  },
  signupWithEmail: (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  },
  signOut: () => {
    return firebase.auth().signOut()
  },
  checkUserAuth: user => {
    console.log('inside firebase checkuserauth')
    return firebase.auth().onAuthStateChanged(user)
  },

  doSendEmailVerification: () => {
    console.log('inside firebase send email verification')  
    return firebase.auth().currentUser.sendEmailVerification()
  },

  currentUser: () => {
    return firebase.auth().currentUser;
  },
  // firestore
  createNewUser: userData => {
    return firebase
      .firestore()
      .collection('users')
      .doc(`${userData.uid}`)
      .set(userData)
  },

  getUserFromCollection: uid => {
    // Valid options for source are 'server', 'cache', or
    // 'default'. See https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
    // for more information.
    var getOptions = {
      source: 'server'
    };

    return firebase
      .firestore()
      .collection('users')
      .doc(`${uid}`)
      .get(getOptions)
      
  }
}

export default Firebase

import firebase from 'firebase'

// Initialize firebase
const config = {
  apiKey: 'AIzaSyBB7qpcn06kWUC9huqfvTIFK0GQRN93KFY',
  authDomain: 'cropchat-d9af8.firebaseapp.com',
  databaseURL: 'https://cropchat-d9af8.firebaseio.com',
  projectId: 'cropchat-d9af8',
  storageBucket: 'cropchat-d9af8.appspot.com',
  messagingSenderId: '1051629282407'
}

firebase.initializeApp(config)

const database = firebase.database()
const storage = firebase.storage()

export {
  database,
  storage
}

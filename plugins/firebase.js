import * as firebase from 'firebase/app'
import 'firebase/auth'

// tell nuxt where to find it
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyA-WFr0r8yi7YuG0zuoDIsQVUsXxe3Aa5U',
  authDomain: 'aweek-58fc3.firebaseapp.com',
  databaseURL: 'https://aweek-58fc3.firebaseio.com',
  projectId: 'aweek-58fc3',
  storageBucket: 'aweek-58fc3.appspot.com',
  messagingSenderId: '718215256030',
  appId: '1:718215256030:web:0ed02a3522e724178caf4f',
  measurementId: 'G-51HMRMVHN4',
}
// Initialize Firebase
let app = null
if (!firebase.app.length) {
  app = firebase.initializeApp(firebaseConfig)
}
// firebase.analytics();

export default firebase

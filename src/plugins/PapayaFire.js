import Vue from 'vue'
import VueFire from 'vuefire'
import Firebase from 'firebase'

Vue.use(VueFire)

var config = {
  apiKey: 'AIzaSyDLBb2XcU0jG-b4pt9WgU9KYH6CcQSLopM',
  authDomain: 'papaya-71cda.firebaseapp.com',
  databaseURL: 'https://papaya-71cda.firebaseio.com',
  storageBucket: 'papaya-71cda.appspot.com',
  messagingSenderId: '898799549954'
}
var firebaseApp = Firebase.initializeApp(config)
var db = firebaseApp.database()
var textRef = db.ref('text')

export default {
  text: textRef
}

import firebase from 'firebase'

const config = {
 		 apiKey: "AIzaSyBowQk59Sk7-udtYAF_-BA8hv57fJpnRvc",
   		 authDomain: "picspost-f5a8f.firebaseapp.com",
    		databaseURL: "https://picspost-f5a8f.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
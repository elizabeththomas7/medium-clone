  import firebase from 'firebase';

  const firebaseApp=firebase.initializeApp(
      {
            apiKey: "AIzaSyC8aYK_8yNL9McMhH4RB_bPFdEkjg1mnsE",
            authDomain: "medium-blog-ad979.firebaseapp.com",
            projectId: "medium-blog-ad979",
            storageBucket: "medium-blog-ad979.appspot.com",
            messagingSenderId: "216197049438",
            appId: "1:216197049438:web:26b95051a5c6003cc458cf"
      }
  )

  const db=firebaseApp.firestore();
  export default db;
import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import firebaseIntializeApp from '../Firebase/Firebase.init';
import { useHistory, useLocation } from 'react-router';
firebaseIntializeApp();


const useFirebase = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({})
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [name , setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [admin , setAdmin] = useState(false);


  //  login with google 

  const loginWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, provider)
      .then(result => {
        setUser(result.user);
        saveGoogleUserDB();
      })
      .finally(() => setIsLoading(false));

  }
  let logout = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      setUser('')
    }).finally(() => setIsLoading(false));
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {

        setUser(user)

      } else {
        setUser("")
      } setIsLoading(false);
    });
  }, [])

  // check admin
  useEffect(() => { 
    fetch(`https://floating-hollows-88352.herokuapp.com/users/${user.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data.admin))
  } , [user.email])


  // registraion 

  const emailpassReg = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password should be upper than six character");
    }


    createUserWithEmailAndPassword(auth, email,  password, name)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);

        // save user to db
        saveUserDB(email , name)

        // send name to firebase
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
        }).catch((error) => {
        });

        alert('Registration Successful')
        if(user) {
          window.location = '/'; //After successful login, user will be redirected to home page
        }
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const catchName = (e) => {
    setName(e.target.value);
  }

  const catchEmail = (e) => {
    setEmail(e.target.value);
  }

  const catchPassword = (e) => {
    setPassword(e.target.value);
  }

  const loginEmailPassword = e => {

    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        if(user) {
          window.location = '/'; //After successful login, user will be redirected to home page
        }
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const saveUserDB = (email , displayName) => {
    const user = {email , displayName};
    fetch('https://floating-hollows-88352.herokuapp.com/users' , {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then()
  }

  const saveGoogleUserDB = (email , displayName) => {
    const user = {email , displayName};
    fetch('https://floating-hollows-88352.herokuapp.com/users' , {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then()
  }



  return {
    user,
    admin,
    loginWithGoogle,
    logout,
    error,
    isLoading,
    emailpassReg,
    catchName,
    catchEmail,
    catchPassword,
    loginEmailPassword
  }

};

export default useFirebase;
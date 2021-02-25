import firebase from 'firebase';
import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NotFound from './components/NotFound';
import SignIn from './features/Auth/pages/SignIn';





// Configure Firebase.
const config = {
  apiKey: 'AIzaSyAwJHwfrlYIIQFmnOEULwrEOBLqPJ6DZQ8',
  authDomain: 'photo-app-cab7c.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);

const Photo = React.lazy(()=> import('./features/Photo'))
function App() {

  // const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      // setIsSignedIn(!!user);
      if(!user){
        //logout
        return;
      }
      console.log('user',user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Header/>
        
        <Switch>
          <Redirect exact from="/" to="/photos" />

          <Route path="/photos" component={Photo} />
          <Route path="/signin" component={SignIn} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;

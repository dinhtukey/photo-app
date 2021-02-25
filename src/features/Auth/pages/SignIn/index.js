import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import Banner from 'components/Banner';
import Images from 'constants/images';
import './SignIn.scss'

SignIn.propTypes = {

};

const uiConfig = {
  signInFlow: 'redirect',
  signInSuccessUrl: '/photos',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
};

function SignIn() {
  return (
    <div className="photo-main">
        <Banner title="🎉 Your awesome photos 🎉" backgroundUrl={Images.ORANGE_BG} />
      <div className="photo-login">
        <h2>Login Form</h2>

        <p>or login with social accounts</p>
      </div>

      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      />
    </div>
  );
}

export default SignIn;
import React from 'react';
import Profile from './Profile';
import './index.css';
import monke from './monke.jpg'


const Login = () => {
  return (
    <div className="w-full h-full bg-black absolute">
      <div className='flex flex-row h-full w-full justify-center items-center absolute'>
        <Profile name="Lucas" profilePicture={monke}/>
      </div>
    </div>
  );
}

export default Login;

import React from 'react';
import Profile from './Profile';
import './index.css';
import monke from './monke.jpg'

const { ipcRenderer } = window.require('electron');


const Login = () => {
  async function getSavePath() {
    const res = ipcRenderer.sendSync('getSavePath');
    const response: string = res;
    return response;
  }
  return (
    <div className="w-full h-full bg-black absolute">
      <div className='flex flex-row h-full w-full justify-center items-center absolute'>
        <Profile name="Lucas" profilePicture={monke}/>
        <Profile name="Create New User" profilePicture={monke}/>
        <p>{getSavePath}</p>
      </div>
    </div>
  );
}

export default Login;

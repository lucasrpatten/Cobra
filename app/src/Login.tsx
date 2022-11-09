import { SetStateAction, useState, useEffect } from 'react';
import Profile from './Profile';
import './index.css';
import monke from './monke.jpg'
import api from './api';

const { ipcRenderer } = window.require('electron');


const Login = () => {
  const [data, setData] = useState('');
  async function getData() {
    const res = await ipcRenderer.invoke(api.getPath);
    setData(res);
  };

  return (
    <div className="w-full h-full bg-black ab;solute">
      <div className='flex flex-row h-full w-full justify-center items-center absolute'>
        <Profile name="Lucas" profilePicture={monke}/>
        <Profile name="Create New User" profilePicture={monke}/>
        <button onClick={getData}>get data</button>
        {data}
      </div>
    </div>
  );
}

export default Login;

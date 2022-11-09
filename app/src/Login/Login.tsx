import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile';
import './../index.css';
import monke from './../ProfilePictures/monke.jpg'

const { ipcRenderer } = window.require('electron');


const Login = () => {
  const [profiles, setProfiles] = useState<any>();
  async function getProfiles() {
    setProfiles([])
    const res = await ipcRenderer.invoke('get-profiles');
    for (let i = 0; i < res.length; i++) {
      console.log(i)
      setProfiles((profiles: any) => [...profiles, <Profile key={i} name={res[i]} profilePicture={monke} />]);
    }
  };

  useEffect(() => {
    getProfiles();
  }, [])

  return (
    <div className="max-w-full max-h-full w-full h-full bg-black absolute" >
      <div className='flex flex-wrap h-full w-full justify-center items-center absolute'>
        {profiles}
        <Link to="/create-profile">
          <Profile name="Create New User" profilePicture={monke} />
        </Link>
      </div>
    </div >
  );
}

export default Login;

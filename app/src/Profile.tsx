import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';
import {app} from 'electron';

interface ProfileDetails {
  name: string;
  profilePicture: string;
}

const Profile = (props:ProfileDetails) => {
  return (
    <>
    <Link to="/">
      <div className='w-28 h-32'>
        <p>{app.getPath('userData')}</p>
        <div className='bg-white w-full h-28 rounded-full overflow-hidden'><img src={props.profilePicture} alt="Icon" /></div>
        <p className='text-center w-full text-white'>{props.name}</p>
      </div>
      </Link>
    </>
  );
}

export default Profile
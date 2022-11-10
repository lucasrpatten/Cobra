import React from 'react';
import './../index.css'


interface ProfileDetails {
  name: string;
  profilePicture: string;
}

const Profile = (props: ProfileDetails) => {
  return (
    <>
      <div className='w-28 h-32 mx-2'>
        <p>{ }</p>
        <div className='bg-white w-full h-28 rounded-full overflow-hidden'><img src={"/assets/" + props.profilePicture + ".jpg"} alt="Icon" /></div>
        <p className='text-center w-full text-white'>{props.name}</p>
      </div>
    </>
  );
}

export default Profile
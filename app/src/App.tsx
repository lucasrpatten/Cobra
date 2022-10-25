import React from 'react';
import Profile from './Profile';
import './index.css';

const App = () => {
  return (
    <div className="w-full h-full bg-black absolute">
      <div className='flex flex-row h-full justify-center items-center'>
        <Profile name="Lucas"/>
      </div>
    </div>
  );
}

export default App; 

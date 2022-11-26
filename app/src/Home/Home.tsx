import React from 'react';
import "./../index.css";
import { useNavigate, useLocation } from 'react-router-dom';

const Home = (props: any) => {
  const navigate = useNavigate();
  const handleIncoming = () => {
    let l = useLocation
  }
  const ths = () => {
    navigate("/")
  }
  return (
    <>
      <button onClick={ths}>afdsf</button>
    </>
  );
}
export default Home;
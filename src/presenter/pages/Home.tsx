import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Page2へ</h1>
      <div>
        <Link to={`/profile/`}>Page2</Link>
      </div>
    </>
  );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import './SplashScreen.css';

const SplashScreen = () => (
  <section className="spashSection">
    <div className="spashSubSection">
      <div className="splashContainer">
        <div>
          <Link to="/login">
            Login
          </Link>
        </div>
        <div>
          <Link to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default SplashScreen;

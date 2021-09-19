import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/shared/logo.svg';
import Illustration from '../../assets/home/illustration-charts.svg';
import './Home.css';

export default function Home() {
  return (
    <>
      <nav className='nav side-padding'>
        <div className='container'>
          <Link to='/' className='nav-logo-container'>
            <img src={Logo} alt='Officelite company logo' className='nav-logo' />
          </Link>
        </div>
      </nav>
      <main>
        <header className='header side-padding'>
          <div className='container header-container'>
            <div className='header-text'>
              <h1 className='header-title'>A simple solution to complex tasks is coming soon</h1>
              <p className='body header-lead'>
                Say goodbye to inefficient juggling of multiple apps, teams and projects. Officelite is the new
                collaboration platform built with an intuitive interface to improve productivity.
              </p>
              <Link to='/signup' className='btn btn-primary header-btn'>
                Get Started
              </Link>
            </div>
            <img
              src={Illustration}
              alt='Header illustration. Shows a graph, statistics card and typography demonstration which all represent an improve in productivity'
              className='header-img'
            />
          </div>
        </header>
      </main>
    </>
  );
}

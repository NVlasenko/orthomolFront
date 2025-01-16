import React from 'react';
import './App.scss';
import './styles/container.scss';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';


export const App: React.FC = ()  => {
  return (
    <div>
      <Header/>
      <div className='content container'>
        <Outlet/>
      </div>
    </div>
  );
}



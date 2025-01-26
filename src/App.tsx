import React from 'react';
import './App.scss';
import './styles/container.scss';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import { BasketProvider } from './context/BasketContextType';


export const App: React.FC = ()  => {
  return (
    <BasketProvider>
      <div>
      <Header/>
      <div className='content container'>
        <Outlet/>
      </div>
    </div>
    </BasketProvider>
    
  );
}



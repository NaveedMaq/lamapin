import './main-layout.css';

import { LeftBar } from '../../components/left-bar/left-bar';
import { TopBar } from '../../components/top-bar/top-bar';
import { Outlet } from 'react-router';

export const MainLayout = () => {
  return (
    <div className='app'>
      <LeftBar />
      <div className='content'>
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
};

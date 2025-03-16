import { UserButton } from '../user-button/user-button';
import './top-bar.css';

export const TopBar = () => {
  return (
    <div className='top-bar'>
      {/* SEARCH */}
      <div className='search'>
        <img src='/general/search.svg' alt='' />
        <input type='text' placeholder='Search' />
      </div>
      {/* USER */}

      <UserButton />
    </div>
  );
};

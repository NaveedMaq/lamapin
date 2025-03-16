import { Image } from '../image/image';
import { UserButton } from '../user-button/user-button';
import './top-bar.css';

export const TopBar = () => {
  return (
    <div className='top-bar'>
      {/* SEARCH */}
      <div className='search'>
        <Image path='/general/search.svg' />
        <input type='text' placeholder='Search' />
      </div>
      {/* USER */}

      <UserButton />
    </div>
  );
};

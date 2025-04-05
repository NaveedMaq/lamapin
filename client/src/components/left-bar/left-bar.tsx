import { Link } from 'react-router';
import { Image } from '../image/image';
import './left-bar.css';

export const LeftBar = () => {
  return (
    <div className='left-bar'>
      <div className='menuIcons'>
        <Link to='' className='menuIcon'>
          <Image path='/general/logo.png' className='logo' />
        </Link>
        <Link to='' className='menuIcon'>
          <Image path='/general/home.svg' />
        </Link>

        <Link to='/create' className='menuIcon'>
          <Image path='/general/create.svg' />
        </Link>

        <Link to='' className='menuIcon'>
          <Image path='/general/updates.svg' />
        </Link>

        <Link to='' className='menuIcon'>
          <Image path='/general/messages.svg' />
        </Link>
      </div>

      <Link to='' className='menuIcon'>
        <Image path='/general/settings.svg' />
      </Link>
    </div>
  );
};

import { Image } from '../image/image';
import './left-bar.css';

export const LeftBar = () => {
  return (
    <div className='left-bar'>
      <div className='menuIcons'>
        <a href='' className='menuIcon'>
          <Image path='/general/logo.png' className='logo' />
        </a>
        <a href='' className='menuIcon'>
          <Image path='/general/home.svg' />
        </a>

        <a href='' className='menuIcon'>
          <Image path='/general/create.svg' />
        </a>

        <a href='' className='menuIcon'>
          <Image path='/general/updates.svg' />
        </a>

        <a href='' className='menuIcon'>
          <Image path='/general/messages.svg' />
        </a>
      </div>

      <a href='' className='menuIcon'>
        <Image path='/general/settings.svg' />
      </a>
    </div>
  );
};

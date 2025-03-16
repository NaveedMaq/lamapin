import { useState } from 'react';
import './user-button.css';
import { Image } from '../image/image';

export const UserButton = () => {
  const [openOptions, setOpenOptions] = useState<boolean>(false);

  // TEMP
  const currentUser: boolean = true;
  return currentUser ? (
    <div className='userButton'>
      <Image path='general/noAvatar.png' alt='' />
      <Image
        onClick={() => setOpenOptions((o) => !o)}
        path='general/arrow.svg'
        alt=''
        className='arrow'
      />
      {openOptions && (
        <div className='userOptions'>
          <div className='userOption'>Profile</div>
          <div className='userOption'>Setting</div>
          <div className='userOption'>Login</div>
        </div>
      )}
    </div>
  ) : (
    <a href='/' className='loginLink'>
      Login / Signup
    </a>
  );
};

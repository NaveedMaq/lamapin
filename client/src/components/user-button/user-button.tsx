import { useState } from 'react';
import './user-button.css';

export const UserButton = () => {
  const [openOptions, setOpenOptions] = useState<boolean>(false);

  // TEMP
  const currentUser: boolean = true;
  return currentUser ? (
    <div className='userButton'>
      <img src='general/noAvatar.png' alt='' />
      <img
        onClick={() => setOpenOptions((o) => !o)}
        src='general/arrow.svg'
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

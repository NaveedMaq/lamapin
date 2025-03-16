import { Image } from '../../components/image/image';
import './profile-page.css';

export const ProfilePage = () => {
  return (
    <div className='profilePage'>
      <Image path='/general/noAvatar.png' />
      <h1 className='profileName'>John Doe</h1>
      <span className='profileUsername'>@johndoe</span>
      <div className='followCounts'>10 followers &middot; 20 followings</div>

      <div className='profileInteractions'>
        <Image path='/general/share.svg' />

        <div className='profileButtons'>
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Image path='/general/more.svg' />
      </div>

      <div className='profileOptions'>
        <span>Created</span>
        <span>Saved</span>
      </div>
    </div>
  );
};

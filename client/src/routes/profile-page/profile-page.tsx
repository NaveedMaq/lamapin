import { useState } from 'react';
import { Image } from '../../components/image/image';
import './profile-page.css';
import { Gallery } from '../../components/gallery/gallery';
import { Collections } from '../../components/collections/collections';

export const ProfilePage = () => {
  const [type, setType] = useState<'saved' | 'created'>('saved');
  return (
    <div className='profilePage'>
      <Image
        className='profileImg'
        path='/general/noAvatar.png'
        w={'100'}
        h={'100'}
      />
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
        <span
          onClick={() => setType('created')}
          className={type === 'created' ? 'active' : ''}
        >
          Created
        </span>
        <span
          onClick={() => setType('saved')}
          className={type === 'saved' ? 'active' : ''}
        >
          Saved
        </span>
      </div>

      {type === 'created' ? <Gallery /> : <Collections />}
    </div>
  );
};

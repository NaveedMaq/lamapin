import { useState } from 'react';
import { Image } from '../../components/image/image';
import './profile-page.css';
import { Gallery } from '../../components/gallery/gallery';
import { Boards } from '../../components/boards/boards';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '../../utils/api-request';

interface IUser {
  _id: string;
  displayName: string;
  username: string;
  email: string;
  img?: string;
  createdAt: string;
  updatedAt: string;
}

export const ProfilePage = () => {
  const [type, setType] = useState<'saved' | 'created'>('saved');

  const { username } = useParams();

  const { isPending, error, data } = useQuery<IUser>({
    queryKey: ['profile', username],
    queryFn: () =>
      apiRequest.get<IUser>(`/users/${username}`).then((res) => res.data),
  });

  if (isPending) return <div>Loading...</div>;

  if (error) return 'An error has occurred ' + error.message;

  if (!data) return 'User not found!';

  return (
    <div className='profilePage'>
      <Image
        className='profileImg'
        path={data.img || '/general/noAvatar.png'}
        w={'100'}
        h={'100'}
      />
      <h1 className='profileName'>{data.displayName}</h1>
      <span className='profileUsername'>@{data.username}</span>
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

      {type === 'created' ? (
        <Gallery userId={data._id} search={''} />
      ) : (
        <Boards userId={data._id} />
      )}
    </div>
  );
};

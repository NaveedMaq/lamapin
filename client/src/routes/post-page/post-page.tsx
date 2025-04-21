import { Link, useParams } from 'react-router';
import { Image } from '../../components/image/image';
import { PostInteractions } from '../../components/post-interactions/postInteractions';
import './post-page.css';
import { Comments } from '../../components/comments/comments';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { apiRequest } from '../../utils/api-request';

interface IPin {
  _id: string;
  media: string;
  width: number;
  height: number;
  title: string;
  description: string;
  link: string;
  board?: string;
  tags: Array<string>;
  user: {
    _id: string;
    displayName: string;
    username: string;
    img?: string;
  };
}

export const PostPage = () => {
  const { id } = useParams();

  const { isPending, error, data } = useQuery<IPin>({
    queryKey: ['pin', id],
    queryFn: () => apiRequest.get<IPin>(`/pins/${id}`).then((res) => res.data),
  });

  if (isPending) return <div>Loading...</div>;

  if (error) return 'An error has occurred ' + error.message;

  if (!data) return 'Pin not found!';

  return (
    <div className='postPage'>
      <svg
        height='20'
        viewBox='0 0 24 24'
        width='20'
        style={{ cursor: 'pointer' }}
      >
        <path d='M8.41 4.59a2 2 0 1 1 2.83 2.82L8.66 10H21a2 2 0 0 1 0 4H8.66l2.58 2.59a2 2 0 1 1-2.82 2.82L1 12z'></path>
      </svg>

      <div className='postContainer'>
        <div className='postImg'>
          <Image src={data.media} w='736' />
        </div>
        <div className='postDetails'>
          <PostInteractions />
          <Link to={`/${data.user.username}`} className='postUser'>
            <Image src={data.user.img || '/general/noAvatar.png'} />
            <span>{data.user.displayName}</span>
          </Link>

          <Comments />
        </div>
      </div>
    </div>
  );
};

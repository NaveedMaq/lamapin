import { useQuery } from '@tanstack/react-query';
import { Image } from '../image/image';
import './boards.css';
import { apiRequest } from '../../utils/api-request';
import { format } from 'timeago.js';
import { Link } from 'react-router';

interface IBoardWithPinDetails {
  _id: string;
  title: string;
  user: string;
  pinCount: number;
  createdAt: string;
  updatedAt: string;
  firstPin?: {
    _id: string;
    media: string;
    width: number;
    height: number;
    title: string;
    description: string;
    link: string;
    board: string;
    tags: Array<string>;
    user: string;
    createdAt: string;
    updatedAt: string;
  };
}

export const Boards = ({ userId }: { userId: string }) => {
  const { isPending, error, data } = useQuery<IBoardWithPinDetails[]>({
    queryKey: ['boards', userId],
    queryFn: () =>
      apiRequest
        .get<IBoardWithPinDetails[]>(`/boards/${userId}`)
        .then((res) => res.data),
  });

  if (isPending) return <div>Loading...</div>;

  if (error) return 'An error has occurred ' + error.message;

  return (
    <div className='collections'>
      {data?.map((board) => (
        <Link
          to={`/search?boardId=${board._id}`}
          key={board._id}
          className='collection'
        >
          <Image src={board.firstPin?.media} />

          <div className='collectionInfo'>
            <h1>{board.title}</h1>
            <span>
              {board.pinCount} pins &middot; {format(board.createdAt)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

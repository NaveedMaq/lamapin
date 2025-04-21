import { useInfiniteQuery } from '@tanstack/react-query';
import { GalleryItem } from '../gallery-item/gallery-item';
import { TGalleryItem } from '../gallery-item/gallery-item.type';
import './gallery.css';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

interface FetchPinsResponse {
  pins: TGalleryItem[];
  nextCursor: number | null;
}

const fetchPins = async ({
  pageParam,
  search,
  userId,
  boardId,
}: {
  pageParam: number;
  search: string | null;
  userId: string | null;
  boardId: string | null;
}): Promise<FetchPinsResponse> => {
  const res = await axios.get<FetchPinsResponse>(
    `${import.meta.env.VITE_API_URL}/pins?cursor=${pageParam}&search=${
      search || ''
    }&userId=${userId || ''}&boardId=${boardId || ''}`
  );

  await new Promise((resolve) => setTimeout(resolve, 5000));

  return res.data;
};

export const Gallery = ({
  search,
  userId,
  boardId,
}: {
  search: string | null;
  userId: string | null;
  boardId: string | null;
}) => {
  const { data, error, fetchNextPage, hasNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ['pins', search, userId],
      queryFn: ({ pageParam }) =>
        fetchPins({ pageParam, search, userId, boardId }),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    });

  if (isLoading) return <h4>Loading...</h4>;

  if (error) return <p>Error: {error.message}</p>;

  const allPins = data?.pages.flatMap((page) => page.pins) || [];

  return (
    <InfiniteScroll
      dataLength={allPins.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more pins...</h4>}
      endMessage={<h3>All Posts Loaded!</h3>}
    >
      <div className='gallery'>
        {allPins.map((item) => (
          <GalleryItem key={item._id} item={item} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

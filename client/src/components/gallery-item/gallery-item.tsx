import './gallery-item.css';
import { TGalleryItem } from './gallery-item.type';

export const GalleryItem = ({ item }: { item: TGalleryItem }) => {
  return (
    <div
      className='gallery-item'
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <img src={item.media} alt='' />
    </div>
  );
};

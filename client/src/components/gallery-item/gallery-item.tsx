import './gallery-item.css';

import { Link } from 'react-router';
import { TGalleryItem } from './gallery-item.type';
import { Image } from '../image/image';

export const GalleryItem = ({ item }: { item: TGalleryItem }) => {
  return (
    <div
      className='gallery-item'
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <Image path={item.media} w='375' />

      <Link to={`/pin/${item.id}`} className='overlay' />
      <button className='saveButton'>Save</button>

      <div className='overlayIcons'>
        <button>
          <Image path='/general/share.svg' />
        </button>
        <button>
          <Image path='/general/more.svg' />
        </button>
      </div>
    </div>
  );
};

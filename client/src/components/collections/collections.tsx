import { Image } from '../image/image';
import './collections.css';

export const Collections = () => {
  return (
    <div className='collections'>
      {/* Collection */}
      <div className='collection'>
        <Image path='/pins/pin1.jpeg' />

        <div className='collectionInfo'>
          <h1>Minimalist Bedrooms</h1>
          <span>12 pins &middot; 1w</span>
        </div>
      </div>

      {/* Collection */}
      <div className='collection'>
        <Image path='/pins/pin1.jpeg' />

        <div className='collectionInfo'>
          <h1>Minimalist Bedrooms</h1>
          <span>12 pins &middot; 1w</span>
        </div>
      </div>

      {/* Collection */}
      <div className='collection'>
        <Image path='/pins/pin1.jpeg' />

        <div className='collectionInfo'>
          <h1>Minimalist Bedrooms</h1>
          <span>12 pins &middot; 1w</span>
        </div>
      </div>
    </div>
  );
};

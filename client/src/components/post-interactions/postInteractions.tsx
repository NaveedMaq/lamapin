import { Image } from '../image/image';
import './postInteractions.css';

export const PostInteractions = () => {
  return (
    <div className='postInteractions'>
      <div className='interactionIcons'>
        <Image path='/general/react.svg' />
        273
        <Image path='/general/share.svg' />
        <Image path='/general/more.svg' />
      </div>

      <button>Save</button>
    </div>
  );
};

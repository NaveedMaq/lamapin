import EmojiPicker from 'emoji-picker-react';
import { Image } from '../image/image';
import './comments.css';
import { useState } from 'react';

export const Comments = () => {
  const [emojiPickerOpen, setEmojiPickerOpen] = useState<boolean>(false);
  return (
    <div className='comments'>
      <div className='commentList'>
        <span className='commentCount'>5 comments</span>
        {/* COMMENT */}
        <div className='comment'>
          <Image path='/general/noAvatar.png' />
          <div className='commentContent'>
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
              suscipit.
            </p>

            <span className='commentTime'>1h</span>
          </div>
        </div>

        {/* COMMENT */}
        <div className='comment'>
          <Image path='/general/noAvatar.png' />
          <div className='commentContent'>
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
              suscipit.
            </p>

            <span className='commentTime'>1h</span>
          </div>
        </div>

        {/* COMMENT */}
        <div className='comment'>
          <Image path='/general/noAvatar.png' />
          <div className='commentContent'>
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
              suscipit.
            </p>

            <span className='commentTime'>1h</span>
          </div>
        </div>

        {/* COMMENT */}
        <div className='comment'>
          <Image path='/general/noAvatar.png' />
          <div className='commentContent'>
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
              suscipit.
            </p>

            <span className='commentTime'>1h</span>
          </div>
        </div>

        {/* COMMENT */}
        <div className='comment'>
          <Image path='/general/noAvatar.png' />
          <div className='commentContent'>
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
              suscipit.
            </p>

            <span className='commentTime'>1h</span>
          </div>
        </div>

        {/* COMMENT */}
        <div className='comment'>
          <Image path='/general/noAvatar.png' />
          <div className='commentContent'>
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
              suscipit.
            </p>

            <span className='commentTime'>1h</span>
          </div>
        </div>

        <div className='comment'>
          <Image path='/general/noAvatar.png' />
          <div className='commentContent'>
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
              suscipit.
            </p>

            <span className='commentTime'>1h</span>
          </div>
        </div>

        <div className='comment'>
          <Image path='/general/noAvatar.png' />
          <div className='commentContent'>
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
              suscipit.
            </p>

            <span className='commentTime'>1h</span>
          </div>
        </div>

        <div className='comment'>
          <Image path='/general/noAvatar.png' />
          <div className='commentContent'>
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
              suscipit.
            </p>

            <span className='commentTime'>1h</span>
          </div>
        </div>
      </div>
      <form className='commentForm'>
        <input type='text' placeholder='Add a comment' />

        <div className='emoji'>
          <div onClick={() => setEmojiPickerOpen((prev) => !prev)}>😊</div>
          {emojiPickerOpen && (
            <div className='emojiPicker'>
              <EmojiPicker />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

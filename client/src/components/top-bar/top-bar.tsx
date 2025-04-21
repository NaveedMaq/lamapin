import { useNavigate } from 'react-router';
import { Image } from '../image/image';
import { UserButton } from '../user-button/user-button';
import './top-bar.css';

export const TopBar = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;

    navigate(`/search?search=${input.value}`);
  };
  return (
    <div className='top-bar'>
      {/* SEARCH */}
      <form onSubmit={handleSubmit} className='search'>
        <Image path='/general/search.svg' />
        <input type='text' placeholder='Search' />
      </form>
      {/* USER */}

      <UserButton />
    </div>
  );
};

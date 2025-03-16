import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage } from './routes/home-page/home-page.tsx';
import { CreatePage } from './routes/create-page/create-page.tsx';
import { PostPage } from './routes/post-page/post-page.tsx';
import { AuthPage } from './routes/auth-page/auth-page.tsx';
import { ProfilePage } from './routes/profile-page/profile-page.tsx';
import { SearchPage } from './routes/search-page/search-page.tsx';
import { MainLayout } from './routes/layouts/main-layout.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/pin/:id' element={<PostPage />} />

          <Route path='/:username' element={<ProfilePage />} />
          <Route path='/search' element={<SearchPage />} />
        </Route>

        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

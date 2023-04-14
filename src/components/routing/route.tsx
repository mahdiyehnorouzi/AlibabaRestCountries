import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DetailPage } from '../pages/detail/detail.page';
import { HomePage } from '../pages/home/home.page';

export const RouteComponent: FC<any> = ({ children }: any) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<HomePage />}>
        </Route>
        <Route path='/detail-page/:name' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
};
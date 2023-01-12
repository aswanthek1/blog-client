import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlogAreaPage from './pages/BlogAreaPage';
import HomePage from './pages/HomePage';
import ShowBlogPage from './pages/ShowBlogPage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route element={<BlogAreaPage/>} path='/create' />
      <Route element={<HomePage/>} path='/' />
      <Route element={<ShowBlogPage/>} path='/blog/:id' />

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

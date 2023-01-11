import react from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlogAreaPage from './pages/BlogAreaPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route element={<BlogAreaPage/>} path='/blog' />
      <Route element={<HomePage/>} path='/' />

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

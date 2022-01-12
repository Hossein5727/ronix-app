import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';

function App() {

  const [isShow, setIsShow] = useState(false)

  const toggleShow = () => {
    setIsShow(true)
  }

  const toggleClose = () => {
    setIsShow(false)
  }

  return (
    <>
      <Layout toggleShow={toggleShow}>
        <Routes>
          <Route path="/" element={<HomePage isShow={isShow} toggleClose={toggleClose} />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

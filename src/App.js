import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';

function App() {

  const [isShow, setIsShow] = useState(false)
  const [isShowSearch, setIsShowSearch] = useState(false)

  const toggleShow = () => {
    setIsShow(true)
  }

  const toggleClose = () => {
    setIsShow(false)
  }

  const toggleCloseSearchClose = () => {
    setIsShowSearch(false)
  }

  const toggleShowSearch = () => {
    setIsShowSearch(true)
  }

  return (
    <>
      <Layout
        toggleShow={toggleShow}
        toggleShowSearch={toggleShowSearch}
      >
        <Routes>
          <Route path="/" element={<HomePage
            isShow={isShow}
            toggleClose={toggleClose}
            isShowSearch={isShowSearch}
            toggleCloseSearch={toggleCloseSearchClose}
          />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

import React from 'react'
import { Provider } from 'react-redux';
import store from "./store/store";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';
import Productcreate from './pages/Productcreate';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/productcreate' element={<Productcreate/>}/>
        </Routes>
      </BrowserRouter>
      <Toaster/>
    </Provider>
  )
}

export default App;
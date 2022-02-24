import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import { useEffect } from 'react';

import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import PostView from './pages/PostView/PostView';
import Astracoin from './pages/AstraCoin/Astracoin';
import CreatePost from './pages/CreatePost/CreatePost';

import { WalletProvider } from './context/WalletContext';

function App() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  //runs once when component is mounted
  useEffect(() => {
    const newAsync = async () => {
      store.dispatch(loadUser());
    };

    newAsync();
  }, []);

  return (
    <WalletProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/post/:id" element={<PostView />} />
          <Route path="/astracoin" element={<Astracoin />} />
          <Route path="/post/create" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </WalletProvider>
  );
}

export default App;

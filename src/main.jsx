import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProfileApp from './components/Profile/App.jsx';
import FriendListApp from './components/FriendList/App.jsx';
import TransactionHistoryApp from './components/TransactionsHistory/App.jsx';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/friendslist"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Friends List
        </NavLink>
        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Transactions
        </NavLink>
      </nav>

      <Routes>
        <Route path="/profile" element={<ProfileApp />} />
        <Route path="/friendslist" element={<FriendListApp />} />
        <Route path="/transactions" element={<TransactionHistoryApp />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

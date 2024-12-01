import React from 'react';
import ReactDOM from 'react-dom/client';
import ProfileApp from './components/Profile/App.jsx';
import FriendListApp from './components/FriendList/App.jsx';
import TransactionHistoryApp from './components/TransactionsHistory/App.jsx';


const APP_TO_RENDER = import.meta.env.VITE_APP_TO_RENDER;
console.log('VITE_APP_TO_RENDER:', import.meta.env.VITE_APP_TO_RENDER);
console.log('APP_TO_RENDER:', APP_TO_RENDER);

let App;
if (APP_TO_RENDER === 'profile') {
  App = ProfileApp;
} else if (APP_TO_RENDER === 'friendslist') {
  App = FriendListApp;
} else if (APP_TO_RENDER === 'transactions') {
  App = TransactionHistoryApp; 
} else {
  throw new Error('APP_TO_RENDER is not specified or incorrect!');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
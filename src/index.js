import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js'
import data from './my_workData.json';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);


// setTimeout( () => {
//   ReactDOM.render(
//     <h2>...</h2>,
//     document.getElementById('root')
//   );
// }, 4000)

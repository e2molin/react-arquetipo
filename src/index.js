import React from 'react';  //Así podemos utilizar JSX
import ReactDOM from 'react-dom';
import App from 'App';

//ReactDOM.render(<div>Hic sunt dracones</div>,document.getElementById("root"));
ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

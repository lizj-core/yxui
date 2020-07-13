import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';

function App() {
  const a = '222';
  if(a === '222'){
    console.log(a);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Button>
          hello
        </Button>

        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          hello
        </Button>

        <Button btnType={ButtonType.Link} href="baidu.com">
          hello
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

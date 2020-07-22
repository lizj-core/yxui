import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Alert, { AlertType } from './components/Alert/alert';

function App() {

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

        <Button btnType={ButtonType.Primary} disable href="baidu.com">
          hello
        </Button>
        <Alert type={AlertType.Success} title="title" isClose />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

      </header>
    </div>
  );
}

export default App;

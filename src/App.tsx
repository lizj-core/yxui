import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Alert, { AlertType } from './components/Alert/alert';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
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
        </div>
        <br />
        <Alert type={AlertType.Success} />
      </header>
    </div>
  );
}

export default App;

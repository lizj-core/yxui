import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Alert, { AlertType } from './components/Alert/alert';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Menu>
          <MenuItem>
            link1
          </MenuItem>
          <MenuItem>
            link2
          </MenuItem>
          <MenuItem>
            link3
          </MenuItem>
        </Menu>

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

import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo }  from '@storybook/addon-info';
import { action } from '@storybook/addon-actions'
import Button from './button';

const style: React.CSSProperties = {
  textAlign: 'center',

}

const centerDecorator = (storyFn: any) => <div style={style}>{storyFn()}</div>

storiesOf('Button', module)
  // .addDecorator(withInfo)
  // .addParameters({
  //   info: {
  //     text: '默认的button',
  //     inline: true,
  //   }
  // })
  .add("自定义按钮", () => {
    return (
      <Button btnType="primary" onClick={action('click this')}>点我</Button>
    )
  })
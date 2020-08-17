import React, { FC, useState, ReactNode } from 'react';
import { storiesOf } from '@storybook/react';
import ScrollList from './scrollList';

const style = {
  height: "30px",
  border: "1px solid green",
  margin: "6px",
  padding: "8px",
};
// const fetchMoreData = () => {
//   console.log(data)
//   setTimeout(() => {
//     data.push

//   }, 1500);
// };


const DefaultComponent: FC = (props) => {
  const [data, setData] = useState(Array.from({ length: 20 }));
  const fetchMoreData = () => {
    console.log(data)
    setTimeout(() => {
      setData(data.concat(Array.from({ length: 20 })))

    }, 1500);
  };

  return (
    <div style={{ height: '200px', overflow: 'auto' }}>
      <ScrollList
        dataLength={data.length}
        loader={<h4 style={{ textAlign: 'center' }}>加载中</h4>}
        nextCallback={fetchMoreData}
        hasMore={true}
      >
        {data.map((i, index) => (
          <div style={style} key={index}>
            div - #{index}
          </div>
        ))}
      </ScrollList>
      <h1>jie</h1>
    </div>

  )
}

const test = () => {
  return <DefaultComponent />
}

storiesOf("scrollList下拉加载更多", module)
  .add("下拉加载更多", test)
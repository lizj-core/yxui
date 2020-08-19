## Prop Types
property | propType | require | default | description
-|-|-|-|-
loader | ReactNode |yes | | 加载中的显示节点
hasMore | boolean | yes | | 是否上拉加载
nextCallback | function | yes| | 是否上拉加载回调函数

```javascript
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
```
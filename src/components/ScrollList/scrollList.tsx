import React, { FC, ReactNode } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

interface ScrollListProps {
  loader: ReactNode;
  children: ReactNode;
  hasMore: boolean;
  dataLength: number;
  /**上拉到底分页回调 */
  nextCallback: () => any;
}

export const ScrollList: FC<ScrollListProps> = (props) => {
  const { 
    children,
    hasMore,
    loader,
    dataLength,
    nextCallback,
  } = props;

  return (
    <InfiniteScroll
      loader={loader}
      hasMore={hasMore}
      dataLength={dataLength}
      next={nextCallback}
    >
      {children}
    </InfiniteScroll>
    
  )
}

export default ScrollList;
import React, { FC } from 'react';
import Icon from '../../components/Icon';

interface BasePorps {
  data: any[];
  href?: string;
  className?: string;
}

export const ViewList: FC<BasePorps> = (props) => {
  const { data } = props;
  return (
    <div>
      {(data || []).map(item => {
        return (
          <div className="item">
            <Icon icon="link" />
            <span style={{paddingLeft:'10px'}}>{item ? item.fileName : ''}</span>
          </div>
        )
      })}
      
    </div>
  )
}

export default ViewList;
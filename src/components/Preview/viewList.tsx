import React, { FC } from 'react';
import ViewListItem from './viewListItem';

interface BasePorps {
  data: any[];
  href?: string;
  className?: string;
  handlePreview?: () => void;
  customPreview?: () => void;
}

export const ViewList: FC<BasePorps> = (props) => {
  const { data, handlePreview, customPreview } = props;

  return (
    <div>
      {(data || []).map(item => {
        return (
          <ViewListItem key={item.fileUuid} fileName={item.fileName} fileUuid={item.fileUuid} />
        )
      })}
      
    </div>
  )
}

export default ViewList;
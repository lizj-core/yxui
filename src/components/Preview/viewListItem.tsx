import React, { FC, useState } from 'react';
import Icon from '../../components/Icon';

interface ViewListItemProps {
  fileName: string;
  fileUuid: string;
  href?: string;
  customPreview?: () => any;
}

const ViewListItem: FC<ViewListItemProps> = (props) => {

  const { fileUuid, fileName, customPreview, href } = props;

  const handleClick = () => {
    if (customPreview) {
      customPreview();
    } else if (href) {
      window.open(href, '_blank')
    }
  }
  return (
    <div onClick={() => handleClick()} className="item">
      <Icon icon="link" />
      <span style={{ paddingLeft: '6px' }}>{fileName}</span>
    </div>
  )
}

export default ViewListItem;
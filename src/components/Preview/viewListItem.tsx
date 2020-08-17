import React, { FC } from 'react';
import Icon from '../../components/Icon';

interface ViewListItemProps {
  fileName?: string;
  fileUuid?: string;
  href?: string;
  customPreview?: () => any;
  previewUrl?: string;
}

const ViewListItem: FC<ViewListItemProps> = (props) => {

  const { fileName, customPreview, previewUrl } = props;

  const handleClick = () => {
    if (customPreview) {
      customPreview();
    } else if (previewUrl) {
      window.open(previewUrl, '_blank')
    }
  }
  return (
    <div onClick={() => handleClick()} className="item">
      <Icon icon="file" />
      <span style={{ paddingLeft: '6px' }}>{fileName}</span>
    </div>
  )
}

export default ViewListItem;
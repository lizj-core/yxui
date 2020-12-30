import React, { FC, useState } from 'react';
import Dialog from 'rc-dialog';

interface PictureListItemProps {
  fileName?: string;
  fileUuid?: string;
  href?: string;
  customPreview?: () => any;
  previewUrl?: string;
}

const PictureListItem: FC<PictureListItemProps> = (props) => {
  const [pictureVisible, setPictureVisible ] = useState(false);
  const { customPreview, previewUrl } = props;

  const handleClick = () => {
    console.log("handleclick")
    if (customPreview) {
      customPreview();
    } else if (previewUrl) {
      setPictureVisible(true);
    }
  }

  const handleClosePreview = () => {
    // e.stopPropagation();
    setPictureVisible(false);
  }
  console.log(pictureVisible);

  return (
    <div onClick={() => handleClick()} className="item">
      <img src={previewUrl} alt=""/>
      {pictureVisible ? (
        <Dialog 
          visible={pictureVisible}
          title="图片预览"
          onClose={() => handleClosePreview()}
        >
          <div style={{textAlign:'center'}}>
            <img src={previewUrl} alt="" />
          </div>
        </Dialog>
      ) : ''}
    </div>
  )
}

export default PictureListItem;
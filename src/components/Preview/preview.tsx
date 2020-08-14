import React, { FC, CSSProperties } from 'react';
import classNames from 'classnames';
import ViewListItem from './viewListItem';
import PictureListItem from './pictureListItem';
// var Dialog = require('rc-dialog');

export type type = 'list' | 'picture';

class Object {
  fileUuid?: string;
  fileName?: string;
  previewUrl?: string;
}

interface PreviewProps {
  href?: string;
  /**
   object: {
     fileUuid: string;
     fileName: string;
     previewUrl: string;
   }
   */
  data: Array<Object>;
  type?: type;
  className?: string;
  style?: CSSProperties;
  isUpdate?: boolean;
  /**删除文件时回调 */
  removeCallback?: () => any;
  /**预览url */
  previewUrl?: string;
  /**自定义预览文件 */
  customPreview?: () => void;
}

export const Preview: FC<PreviewProps> = (props) => {
  const {
    className,
    type,
    style,
    data,
    customPreview,
    // isUpdate,
  } = props;

  const classes = classNames('yuexun-preview', className, {
    [`yuexun-preview-${type}`]: type,
  });

  const renderPreviewType = () => {
    console.log(data);
    
    return (
      <div className={classes} style={style}>
        {data.map((item, index) => {
          if (type === "picture") {
            return (
              <PictureListItem
                customPreview={customPreview}
                fileName={item.fileName}
                fileUuid={item.fileUuid}
                key={index}
                previewUrl={item.previewUrl}
              />
            )
          } else {
            return (
              <ViewListItem
                fileName={item.fileName}
                fileUuid={item.fileUuid}
                key={index}
                customPreview={customPreview}
                previewUrl={item.previewUrl}
              />
            )
          }

        })}
      </div>
    )
  }

  return (
    <div>
      {renderPreviewType()}
    </div>
  )
}

Preview.defaultProps = {
  type: 'list',

}

export default Preview;
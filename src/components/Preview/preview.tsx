import React, { FC, CSSProperties, useState } from 'react';
import ViewList from './viewList';
import classNames from 'classnames';
// var Dialog = require('rc-dialog');
import Dialog from 'rc-dialog'

export type type = 'list' | 'picture';

interface PreviewProps {
  href?: string;
  data: any[];
  type?: type;
  className?: string;
  style?: CSSProperties;
  isUpdate?: boolean;
  /**删除文件时回调 */
  // removeCallback?: (index: number) => any;
  previewUrl?: string;
  /**自定义预览文件 */
  customPreview?: () => void;
}

export const Preview: FC<PreviewProps> = (props) => {
  const [visible, setVisible] = useState(false);

  const handlePreview = () => {
    setVisible(!visible);
  }

  const renderPreviewType = () => {
    if (type === 'picture') {
      return (
        <div className={classes} style={style}>
          <ViewList
            className={classes} 
            data={data} 
            href={href} 
            handlePreview={handlePreview}
           />
        </div>
      )
    } else {
      return (
        <div className={classes} style={style}>
          <ViewList handlePreview={handlePreview} className={classes} data={data} href={href} />
        </div>
      )
    }
  }

  const handleClose = () => {
    setVisible(false)
  }

  const { 
    className,
    type,
    href,
    style,
    data,
  } = props;
  const classes = classNames('yuexun-preview', className, {
    [`yuexun-preview-${type}`]: type,
  });
  return (
    <div>
      {renderPreviewType()}
      {visible && (
        <Dialog
          title="tt"
          visible={visible}
          onClose={() => handleClose()}
        >
          <p>first dialog</p>
        </Dialog>
      )}
    </div>
  )
}

Preview.defaultProps = {
  type: 'list',

}

export default Preview;
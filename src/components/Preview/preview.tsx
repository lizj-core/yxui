import React, { FC } from 'react';
import ViewList from './viewList';
import classNames from 'classnames';

export type type = 'list' | 'picture';

interface PreviewProps {
  href?: string;
  data: any[];
  type?: type;
  className?: string;

}

export const Preview: FC<PreviewProps> = (props) => {
  const { 
    className,
    data,
    type,
    href,
  } = props;
  const classes = classNames('yuexun-preview', className, {
    [`yuexun-preview-${type}`]: type,
  })
  if(type === 'picture') {
    return (
      <div className={classes}>
        <ViewList className={classes} data={data} href={href} />
      </div>
    )
  }else {
    return (
      <div className={classes}>
        <ViewList className={classes} data={data} href={href} />
      </div>
    )
  }
}

Preview.defaultProps = {
  type: 'list',

}

export default Preview;
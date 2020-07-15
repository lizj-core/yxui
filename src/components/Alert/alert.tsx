import React from 'react';
import classNames from 'classnames';

export enum AlertType {
    Success = 'success',
    Default = 'default',
    Danger = 'danger',
    Warning = 'warning',
}

interface BaseAlertProps {
    type?: string;
    isClose?: boolean;
    className?: string;
    title?: string;
    describe?: string;
}

const Alert: React.FC<BaseAlertProps> = (props) => {
    const {
        className,
        type,
        title,
        describe,
        isClose
    } = props;
    const classes = classNames('alert', className, {
        [`alter-${type}`]: type,
    })
    return (
        <div className={classes}>
            <div>
                <div>{title}</div>
                <div>{describe}</div>
            </div>
            {isClose && (
                <div>关闭</div>
            )}
        </div>
    )
}

export default Alert;
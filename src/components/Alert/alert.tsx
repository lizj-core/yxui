import React from 'react';
import classNames from 'classnames';

export enum AlertType {
    Success = 'success',
    Default = 'default',
    Danger = 'danger',
    Warning = 'warning',
}

interface BaseAlertProps {
    type: string;
    isClose?: boolean;
    className?: string;
    title?: string;
    describe?: string;
}

const Alert: React.FC<BaseAlertProps> = (props) => {
    const {
        className,
        type,
    } = props;
    const classes = classNames(className, {
        [`alter-${type}`]: type,
    })
    return (
        <div className={classes}>
        </div>
    )
}

export default Alert;
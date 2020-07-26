import React from 'react';
export declare enum AlertType {
    Success = "success",
    Default = "default",
    Danger = "danger",
    Warning = "warning"
}
interface BaseAlertProps {
    type?: string;
    isClose?: boolean;
    className?: string;
    title?: string;
    describe?: string;
}
declare const Alert: React.FC<BaseAlertProps>;
export default Alert;

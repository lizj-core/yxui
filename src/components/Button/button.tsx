import React from 'react';
import classNames from 'classnames';

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm',
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link',
}

interface BaseButtonProps {
    className?: string;
    disable?: boolean;
    size?: string;
    btnType?: string;
    children: React.ReactNode;
    href?: string;
}

const Button: React.FC<BaseButtonProps> = (props) => {

    const {
        className,
        disable,
        size,
        btnType,
        children,
        href,
    } = props;

    const classes = classNames('btn', {
        [`btn-${btnType}`]: btnType,
        [`btn=${size}`]: size,
        'disable': btnType === ButtonType.Link && disable,
    })

    if(btnType === ButtonType.Link && href) {
        return (
            <a 
                href={href}
                className={classes}
            >
                {children}
            </a>
        )
    }else {
        return (
            <button
                className={classes}
                disabled={disable}
            >
                {children}
            </button>
        )
    }
}

Button.defaultProps = {
    disable: false,
    btnType: ButtonType.Default,
}

export default Button;
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

type nativeButton = BaseButtonProps &  React.ButtonHTMLAttributes<HTMLElement>;
type anchorButton = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;


export type buttonProps = Partial<nativeButton & anchorButton>

const Button: React.FC<buttonProps> = (props) => {

    const {
        className,
        disable,
        size,
        btnType,
        children,
        href,
        ...restProps
    } = props;

    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disable': btnType === ButtonType.Link && disable,
    })

    if(btnType === ButtonType.Link && href) {
        return (
            <a 
                href={href}
                className={classes}
                {...restProps}
            >
                {children}
            </a>
        )
    }else {
        return (
            <button
                className={classes}
                disabled={disable}
                {...restProps}
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
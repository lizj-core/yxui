import React, {FC, ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode} from 'react';
import classNames from 'classnames';

// export enum ButtonSize {
//     Large = 'lg',
//     Small = 'sm',
// }

type ButtonSize = 'lg' | 'sm'
type ButtonType = 'primary' | 'default' | 'danger' | 'link'
// export enum ButtonType {
//     Primary = 'primary',
//     Default = 'default',
//     Danger = 'danger',
//     Link = 'link',
// }

interface BaseButtonProps {
    className?: string;
    /**设置button的禁用 */
    disable?: boolean;
    /**设置button的大小 */
    size?: ButtonSize;
    /**设置button的类型 */
    btnType?: ButtonType;
    children: ReactNode;
    href?: string;
}

type nativeButton = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type anchorButton = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;


export type buttonProps = Partial<nativeButton & anchorButton>

export const Button: FC<buttonProps> = (props) => {

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
        'disable': btnType === 'link' && disable,
    })

    if(btnType === 'link' && href) {
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
    btnType: 'default',
}

export default Button;
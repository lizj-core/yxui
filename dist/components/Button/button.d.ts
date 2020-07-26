import { FC, ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
declare type ButtonSize = 'lg' | 'sm';
declare type ButtonType = 'primary' | 'default' | 'danger' | 'link';
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
declare type nativeButton = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type anchorButton = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type buttonProps = Partial<nativeButton & anchorButton>;
export declare const Button: FC<buttonProps>;
export default Button;

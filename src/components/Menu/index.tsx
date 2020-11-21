import { FC } from 'react'
import Menu, { MenuProps } from './menu'
// import SubMenu, { SubMenuProps } from './subMenu'
import MenuItem, { MenuItemPorps } from './menuItem'

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemPorps>,
//   SubMenu: FC<SubMenuProps>
}
const TransMenu = Menu as IMenuComponent

TransMenu.Item = MenuItem
// TransMenu.SubMenu = SubMenu

export default TransMenu
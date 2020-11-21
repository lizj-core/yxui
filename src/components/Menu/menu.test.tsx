import React from 'react';
import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react';

import Menu, { MenuProps } from './menu';
import MenuItem from './menuItem';

const testProps: MenuProps = {
    defaultIndex: 0,
    onSelected: jest.fn(),
    className: 'test',
}

const testVerProps: MenuProps = {
    mode: "vertical",
}

const renderMenu = (props: MenuProps) => {
    return (
        <Menu {...props}>
            <MenuItem>
                active
            </MenuItem>
            <MenuItem disabled>
                disabled
            </MenuItem>
            <MenuItem>
                sss
            </MenuItem>
        </Menu>
    )
}
let warpper: RenderResult, MenuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement;
describe("menu组件和menuItem组件测试", () => {
    beforeEach(() => {
        warpper = render(renderMenu(testProps));
        MenuElement = warpper.getByTestId("test-menu");
        activeElement = warpper.getByText("active");
        disabledElement = warpper.getByText("disabled");
    })
    it("元素是否正常渲染", () => {
        expect(MenuElement).toBeInTheDocument()
        expect(MenuElement).toHaveClass("yxui-menu test")
        expect(MenuElement.getElementsByTagName('li').length).toEqual(3)
    })
    it("点击元素正确调用回调方法", () => {
        const threeItme = warpper.getByText("sss");
        fireEvent.click(threeItme);
        expect(threeItme).toHaveClass("is-active");
        expect(activeElement).not.toHaveClass("is-active");
        fireEvent.click(disabledElement);
        expect(disabledElement).not.toHaveClass("is-active");
    })
    it("竖向组件测试", () => {
        cleanup();
        const newWarpper = render(renderMenu(testVerProps));
        const element = newWarpper.getByTestId("test-menu");
        expect(element).toHaveClass("menu-vertical")
    })
})
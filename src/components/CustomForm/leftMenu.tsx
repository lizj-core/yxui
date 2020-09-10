import React, { FC, useState } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import Transition from '../Transition';
import LeftMenuContainer from './leftMenuItemContainer';

const LeftMenu: FC = (props) => {
    const [layoutShow, setLayoutShow] = useState(true);
    const [componentShow, setComponentShow] = useState(true);

    return (
        <div className="">
            <header className="left-menu-header" onClick={() => setLayoutShow(!layoutShow)}>
                布局
                {
                    layoutShow ? <Icon icon="angle-up" style={{ position: 'absolute', right: '10px', top: '8px' }} /> : <Icon icon="angle-down" style={{ position: 'absolute', right: '10px', top: '8px' }} />
                }
            </header>
            <Transition
                animation="zoom-in-top"
                appear
                in={layoutShow}
                timeout={300}
                unmountOnExit
            >
                <div className="left-menu-body">
                    <LeftMenuContainer className="one-column" layout={1} />
                    <LeftMenuContainer className="two-column" layout={2}>
                        <div />
                        <div />
                    </LeftMenuContainer>
                    <LeftMenuContainer className="three-column" layout={3}>
                        <div />
                        <div />
                        <div />
                    </LeftMenuContainer>
                </div>
            </Transition>

            <header className="left-menu-header" onClick={() => setComponentShow(!componentShow)}>
                表单组件
                {
                    componentShow ? <Icon icon="angle-up" style={{ position: 'absolute', right: '10px', top: '8px' }} /> : <Icon icon="angle-down" style={{ position: 'absolute', right: '10px', top: '8px' }} />

                }
            </header>
            <Transition
                animation="zoom-in-top"
                appear
                in={componentShow}
                timeout={300}
                unmountOnExit
            >
                <div className="left-menu-body">
                    <div className={classNames('one-column', 'column')} />
                    <div className={classNames('two-column', 'column')}>
                        <div />
                        <div />
                    </div>
                    <div className={classNames('three-column', 'column')}>
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
            </Transition>
        </div>
    )
}

export default LeftMenu;
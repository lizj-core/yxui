import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

export type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'
type TransitionProps = CSSTransitionProps & {
  /**显示隐藏的方向 */
  animation?: AnimationName,
  /**是否套一层div */
  wrapper? : boolean,
  in: boolean,
}

/**
 * import { Transition } from 'yuexun-ui'
 */
const Transition: React.FC<TransitionProps> = (props) => {
  const {
    children,
    classNames,
    animation,
    wrapper,
    ...restProps
  } = props
  
  return (
    <CSSTransition
      classNames = { classNames ? classNames : animation}
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
}

export default Transition
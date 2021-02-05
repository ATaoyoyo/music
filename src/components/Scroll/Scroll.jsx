import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react'
import BScroll from '@better-scroll/core'
import PropTypes from 'prop-types'

import { ScrollWrapper } from './style'

const Scroll = forwardRef((props, ref) => {
  const {
    direction,
    topBounce,
    bottomBounce,
    leftBounce,
    rightBounce,
    refresh,
    children,
  } = props

  const { onScroll, onPullDown, onPullUp } = props

  const scrollWrapperRef = useRef()

  const [bScroll, setBScroll] = useState()

  useEffect(() => {
    const scroll = new BScroll(scrollWrapperRef.current, {
      scrollX: direction === 'horizontal',
      scrollY: direction === 'vertical',
      click: true,
      probeType: 3,
      bounce: true,
      momentum: true,
      directionLockThreshold: 0,
      // bounce: {
      //   top: topBounce,
      //   bottom: bottomBounce,
      //   left: leftBounce,
      //   right: rightBounce,
      // },
    })

    setBScroll(scroll)

    return () => {
      setBScroll(null)
    }
  }, [bottomBounce, direction, leftBounce, rightBounce, topBounce])

  // 滚动刷新
  useEffect(() => {
    if (bScroll && refresh) {
      bScroll.refresh()
    }
  })

  // 滚动事件
  useEffect(() => {
    if (!bScroll || !onScroll) return
    bScroll.on('scroll', (scroll) => {
      onScroll(scroll)
    })
    return () => {
      bScroll.off('scroll')
    }
  }, [onScroll, bScroll])

  // 下拉事件
  useEffect(() => {
    if (!bScroll || !onPullDown) return
    bScroll.on('touchEnd', (position) => {
      if (position.y > 50) {
        onPullDown()
      }
    })
    return () => {
      bScroll.off('touchEnd')
    }
  }, [bScroll, onPullDown])

  // 触底事件
  useEffect(() => {
    if (!bScroll || !onPullUp) return

    bScroll.on('scrollEnd', () => {
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        onPullUp()
      }
    })
    return () => {
      bScroll.off('scrollEnd')
    }
  }, [bScroll, onPullUp])

  //
  useImperativeHandle(ref, () => ({
    refresh() {
      if (bScroll) {
        bScroll.refresh()
        bScroll.scrollTo(0, 0)
      }
    },
    getBScroll() {
      if (bScroll) {
        return bScroll
      }
    },
  }))

  return <ScrollWrapper ref={scrollWrapperRef}>{children}</ScrollWrapper>
})

ScrollWrapper.defaultProps = {
  direction: 'vertical',
  topBounce: true,
  bottomBounce: true,
  leftBounce: true,
  rightBounce: true,
  refresh: true,
  onScroll: null,
  onPullDown: null,
  onPullUp: null,
}

ScrollWrapper.prototype = {
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  topBounce: PropTypes.bool,
  bottomBounce: PropTypes.bool,
  leftBounce: PropTypes.bool,
  rightBounce: PropTypes.bool,
  refresh: PropTypes.bool,
  onScroll: PropTypes.func,
  onPullUp: PropTypes.func,
  onPullDown: PropTypes.func,
}

export default Scroll

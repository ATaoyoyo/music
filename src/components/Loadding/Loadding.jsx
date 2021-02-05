import React from 'react'
import styled, { keyframes } from 'styled-components'

const loading = keyframes`
  0%, 100% {
    transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
  }
`
const LoadingWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 999;

  > div {
    position: fixed;
    z-index: 1000;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 60px;
    height: 60px;
    opacity: 0.6;
    border-radius: 50%;
    background-color: #f66;
    animation: ${loading} 1.4s infinite ease-in;
  }

  > div:nth-child (2) {
    animation-delay: -0.7s;
  }
`

function Loading() {
  return (
    <LoadingWrapper>
      <div />
      <div />
    </LoadingWrapper>
  )
}

export default React.memo(Loading)

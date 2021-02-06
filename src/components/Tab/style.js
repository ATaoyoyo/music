import styled from 'styled-components'

const TabWrapper = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 45px;
  z-index: 99;
  background-color: #fff;
  box-shadow: 0 -1px 5px 1px rgba(177, 177, 177, 0.1);
`

const TabItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #b1b1b1;

  &.is-active {
    color: #d43c33;
  }

  .text {
    margin-top: 3px;
    font-size: 12px;
  }
`

export { TabWrapper, TabItem }

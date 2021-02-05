import styled from 'styled-components'

const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #d43c33;

  .left, .right {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    width: 40px;
    height: 40px;
    text-align: center;
  }

  .center {
    flex: 1;
  }
`

export { HeadWrapper }

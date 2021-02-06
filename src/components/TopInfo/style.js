import styled from 'styled-components'

const Top = styled.div`
  display: flex;
  align-items: center;

  .desc {
    flex: 1;
    display: flex;
    align-items: center;

    .icon {
      font-size: 12px;
    }
  }

  .more {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 20px;
    font-size: 10px;
    font-weight: 330;
    color: #333;
    border-radius: 20px;
    background-color: #fff;
    border: 1px solid #eee;

    &:focus,
    &:active {
      outline: none;
    }

    .icon {
      font-size: 12px;
    }
  }
`
export { Top }

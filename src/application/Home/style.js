import styled from 'styled-components'

const HomeContainer = styled.div`
  position: absolute;
  padding-bottom: 80px;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  //background-color: #eee;
`

const Content = styled.div`
  margin-bottom: 50px;
  width: 100%;
  //height: 100%;
  background-color: #eee;
`

const Input = styled.input.attrs((props) => ({
  type: 'text',
}))`
  width: 100%;
  padding: 5px 10px;
  font-size: 12px;
  color: #333;
  border: 1px solid #fff;
  border-radius: 20px;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: #666;
  }
`

export { Input, HomeContainer, Content }

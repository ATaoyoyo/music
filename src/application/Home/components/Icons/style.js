import styled from 'styled-components'

const SwiperContainer = styled.div`
  padding: 10px;
  background-color: #fff;
`

const Icon = styled.div`
  width: 45px;

  .icon {
    display: block;
    width: 45px;
    height: 45px;
    background-color: #f66;
    border-radius: 50%;
  }

  .icon-text {
    display: inline-block;
    width: 100%;
    margin-top: 3px;
    font-size: 18px;
    color: #333;
    text-align: center;
  }
`

export { Icon, SwiperContainer }

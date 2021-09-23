import styled from 'styled-components'

const SwiperContainer = styled.div`
  padding: 10px;
  background-color: #fff;
`

const Icon = styled.div`
  width: 48px;
  text-align: center;

  .icon {
    display: block;
    width: 48px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    font-size: 18px;
    color: #d43c33;
    background-color: rgba(255, 102, 102, 0.2);
    border-radius: 50%;
  }

  .icon-text {
    display: inline-block;
    width: 100%;
    margin-top: 3px;
    font-size: 12px;
    color: #333;
    text-align: center;
  }
`

export { Icon, SwiperContainer }

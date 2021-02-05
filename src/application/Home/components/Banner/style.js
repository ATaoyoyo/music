import styled from 'styled-components'

const SwiperContainer = styled.div`
  padding: 10px 0;
  width: 100%;
  //height: 125px;
  overflow: hidden;
  //background-color: #ddd;
  box-sizing: border-box;
  background-color: #fff;

  .swiper-pagination-bullet {
    width: 8px;
    height: 1px;
    text-align: center;
    border-radius: 0;
  }

  .swiper-pagination-bullet-active {
    color: #fff;
    background: #fff;
  }

  .swiper-img {
    padding: 0 10px;
    width: 100%;
    box-sizing: border-box;

    img {
      width: 100%;
      border-radius: 10px;
    }
  }

  .swiper-empty {
    width: 100%;
    height: 125px;
    background-color: #ddd;
    border-radius: 5px;
  }
`

export { SwiperContainer }

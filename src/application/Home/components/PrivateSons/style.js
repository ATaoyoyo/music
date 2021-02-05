import styled from 'styled-components'

const PrivateWrapper = styled.div`
  padding: 10px;
  background-color: #fff;
  border-top: 1px solid #eee;

  .swiper-slide {
    margin: 5px 0;
  }
`

const PrivateSong = styled.div`
  width: 100%;
  background-color: #fff;

  .song-item {
    display: flex;
    margin: 5px 0;

    &:nth-child(2n) {
      border-bottom: 1px solid #eee;
    }

    .song-img {
      width: 50px;
      height: 50px;
      overflow: hidden;

      img {
        width: 100%;
        border-radius: 10px;
      }
    }

    .song-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;

      .song-name {
        font-size: 12px;
        color: #333;

        .author {
          font-size: 9px;
          color: #666;
        }
      }

      .song-desc {
        font-size: 10px;
        color: #ddd;
      }
    }
  }
`

export { PrivateWrapper, PrivateSong }

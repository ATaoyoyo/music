import styled from 'styled-components'

const LeaderboardWrapper = styled.div`
  padding: 10px;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  //background-image: url('https://s3.music.126.net/mobile-new/img/recommand_bg_2x.png?d045fafc60e017b653f8065a87496922=');
  //background-size: cover;
  //background-position: center;
  //background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);

  .card {
    //margin: 10px;
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 5px 0 rgba(169, 169, 169, 0.3);
    background-color: #fff;

    .title {
      font-size: 14px;
      font-weight: bold;
      text-align: center;
    }

    .list {
      display: flex;
      align-items: center;
      margin-bottom: 5px;

      .list-item-img {
        width: 50px;
        height: 50px;
        background-color: #f66;
        border-radius: 10px;
        overflow: hidden;

        img {
          width: 100%;
        }
      }

      .list-item-info {
        flex: 1;
        display: flex;
        align-items: center;
        padding-left: 5px;
        font-size: 12px;
        color: #333;

        .num {
          width: 10px;
          font-weight: bold;
        }

        .song-name {
          //flex: 1;
          margin-left: 5px;
          white-space: normal;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .song-author {
          margin-left: 5px;
          //width: 10px;
          font-size: 11px;
          font-weight: normal;
          color: #666;
        }
      }
    }
  }
`

export { LeaderboardWrapper }

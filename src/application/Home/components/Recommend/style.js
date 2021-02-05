import styled from 'styled-components'

const RecommendWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding: 0 10px 10px 10px;
  box-sizing: border-box;
  border-top: 1px solid #eee;
  background-color: #fff;

  .top {
    display: flex;
    align-items: center;

    p {
      flex: 1;
    }

    .more {
      width: 50px;
      height: 25px;
      font-size: 12px;
      color: #666;
      border-radius: 10px;
      background-color: #fff;
      border: 1px solid #ddd;

      &:focus,
      &:active {
        outline: none;
      }
    }
  }
`

const SongList = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  .list-item {
    display: inline-block;
    margin-right: 10px;
    width: 100px;

    &:last-child {
      margin-right: 0;
    }

    .song-img {
      width: 100px;
      height: 100px;
      border-radius: 10px;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    .song-desc {
      display: -webkit-box;
      margin: 3px 0;
      width: 100px;
      color: #333;
      font-size: 12px;
      white-space: normal;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
`

export { RecommendWrapper, SongList }

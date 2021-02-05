import React, { useRef, useEffect } from 'react'
import { forceCheck } from 'react-lazyload'

import { RecommendWrapper, SongList } from './style'
import Scroll from '../../../../components/Scroll/Scroll'
import TopInfo from '../../../../components/TopInfo/TopInfo'
import LazyLoad from '../../../../components/LazyLoad/LazyLoad'
import Icon from '../../../../components/Icon/Icon'

const Recommend = ({ desc, button, recommend, songInfo }) => {
  const scrollRef = useRef()

  useEffect(() => {
    scrollRef.current?.refresh && scrollRef.current.refresh()
  })

  const defaultButton = (
    <span>
      更多
      <Icon icon="angle-right" />
    </span>
  )

  return (
    <RecommendWrapper>
      <TopInfo desc={desc} button={button || defaultButton} />
      <Scroll direction="horizontal" ref={scrollRef} onScroll={forceCheck}>
        <SongList>
          {recommend.map((item) => {
            return (
              <div key={item.id} className="list-item">
                <div className="song-img">
                  <LazyLoad width={100} height={100} alt={item[songInfo.name]}>
                    <img
                      src={item[songInfo.picUrl]}
                      alt={item[songInfo.name]}
                    />
                  </LazyLoad>
                </div>
                <p className="song-desc">{item[songInfo.desc]}</p>
              </div>
            )
          })}
        </SongList>
      </Scroll>
    </RecommendWrapper>
  )
}

export default Recommend

import React from 'react'
import './Viewer.css'
import { getEmotionImage } from '../util/getEmotionImage'
const Viewer = () => {
  const emotionId=3
  return (
    <div className='Viewer'>
      <section className="viewer-img-section">
        <h4>오늘의 감정</h4>
        <div className={`emotion-img-wrapper img-${emotionId}`}>
          <img src={getEmotionImage(emotionId)} alt="" />
          <div>
            완전 좋음
          </div>
        </div>
      </section>
      <section className="content-section">
        <h4>오늘의 일기</h4>
        <div className="content-wrapper">
          <p>일기 내용 </p>
        </div>
      </section>
    </div>
  )
}

export default Viewer
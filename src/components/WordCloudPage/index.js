import React, { useEffect, useRef } from 'react'
import Layout from '../Layout'
import Wordcloud from '../WordCloud'
import lottie from 'lottie-web'
import css from './index.module.css'
export default function WordCloudPage() {
  const container = useRef(null)
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      path: '/images/33645-happy-dog.json',
      // autoplay: true,
      renderer: 'svg',
      // loop: true,
    })
    anim.setSpeed(5)
    // anim.destroy()
  }, [])
  return (
    <Layout>
      <div
        className='bg-contain bg-no-repeat bg-top h-full pl-3 pt-3'
        style={{ backgroundImage: 'url(/images/lettersBro.png)' }}
      >
        <div className='bg-white opacity-90 h-full'>
          <Wordcloud />
        </div>
      </div>
      <div className='w-1/12   fixed -bottom-8 -right-8 ' ref={container}>
        <div className={css.dog}>
          <p className={css.dog}>🦴🥎🐈</p>
        </div>
      </div>
    </Layout>
  )
}

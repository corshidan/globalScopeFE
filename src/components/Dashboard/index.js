import React, { useEffect, useRef } from 'react'
import Layout from '../Layout'
import Card from '../Card'

import lottie from 'lottie-web'
import css from './index.module.css'

// import { useUser } from '../App/App.js';

export default function Dashboard() {
  const container = useRef(null)

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      path: '/images/33645-happy-dog.json',
      // autoplay: true,
      renderer: 'svg',
      // loop: true,
    })
    anim.setSpeed(2)
    // anim.destroy()
  }, [])
  // const user = useUser();
  return (
    <Layout>
      {/* <div className="grid grid-cols-2 p-10"> */}
      <div className='flex flex-col justify-center items-center mt-10'>
        <div className='flex justify-around mb-5 w-1/2'>
          <Card
            image='/images/addToBlogImage.png'
            // title='Add to Blog'
            buttonLabel='Add to Blog'
            path='/bloginputpage'
          />
          <Card
            image='/images/seeYourStatsImage.png'
            // title='See your Stats'
            buttonLabel='See your Stats'
            path='/statistics'
          />
        </div>
        <div className='flex justify-around w-1/2'>
          <Card
            image='/images/recapBlogImage.png'
            // title='Blog Recap'
            buttonLabel='Blog Recap'
            path='/blogrecappage'
          />
          <Card
            image='/images/lettersBro.png'
            // title='Word Cloud'
            buttonLabel='Word Cloud'
            path='/cloud'
          />
        </div>
      </div>
      <div className='w-1/12   fixed -bottom-8 -right-8  ' ref={container}>
        <div className={css.dog}>
          <p className={css.text}>
            Hi..I'm dog.. <br />
            I'll keep you company whilst you reflect..
          </p>
        </div>
      </div>
    </Layout>
  )
}

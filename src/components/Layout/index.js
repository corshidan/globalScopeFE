import React, { useEffect, useRef } from 'react'
import Sidebar from '../Sidebar'
import css from './index.module.css'
import Header from '../Header'
import Box from '@mui/material/Box'
import lottie from 'lottie-web'

export default function Layout({ children }) {
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

  return (
    <Box>
      <div className={css.layoutComponent}>
        <div className={css.left}></div>
        <Sidebar />
        <div className={css.right}>
          <div>
            <Header />
          </div>
          <div className={css.children}>{children}</div>
        </div>
        <div className='w-1/12   fixed bottom-0 right-0  ' ref={container}>
          <div className={css.dog}>
            <p className={css.dog}>
              Hi..I'm dog.. <br />
              I'll keep you company whilst you reflect..
            </p>
          </div>
        </div>
      </div>
    </Box>
  )
}

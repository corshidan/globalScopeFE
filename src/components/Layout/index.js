import React from 'react'
import Sidebar from '../Sidebar'
import css from './index.module.css'
import Header from '../Header'
export default function Layout({ children }) {
  return (
    <>
      <div className="h-full flex">
        <Sidebar />
        <div>
        <Header />
        <div className={css.right}>{children}</div>
        </div>
      </div>
    </>
  )
}

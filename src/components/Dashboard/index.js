import React from 'react'
import Layout from '../Layout'
import Card from '../Card'
// import { useUser } from '../App/App.js';

export default function Dashboard() {
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
    </Layout>
  )
}

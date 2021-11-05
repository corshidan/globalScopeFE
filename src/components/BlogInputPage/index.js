import Layout from '../Layout'
import Slider from '@mui/material/Slider'
import { useForm } from 'react-hook-form'
import EmojiInput from '../EmojiInput'
import { useState, useEffect, useRef } from 'react'
import { useUser } from '../App/App.js'
import { useHistory } from 'react-router-dom'
import { getToday } from '../../libs/helperFunctions'
import lottie from 'lottie-web'
import shortQuotes from '../shortQuotes'
import css from './index.module.css'

export default function BlogInputPage() {
  const container = useRef(null)
  const user = useUser()
  const topicInputStyle = 'w-2/3 mr-1 border pl-2 bg-gray-100 rounded'
  const topicRatingStyle = 'w-1/6 border bg-gray-100 rounded pr-1'
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [overallFeeling, setOverallFeeling] = useState(null)
  const [topicList, setTopicList] = useState([])
  const history = useHistory()
  const url = 'https://global-scope.herokuapp.com/reflections'
  const onSubmit = (data) => {
    const newReflection = {
      bootcamperid: user.bootcamperid,
      reflection: data.reflection,
      private: data.private,
      topics: [
        { topic: data.firsttopic, rating: data.firstrating },
        { topic: data.secondtopic, rating: data.secondrating },
        { topic: data.thirdtopic, rating: data.thirdrating },
        { topic: data.fourthtopic, rating: data.fourthrating },
      ],
      confidence: data.confidence,
      grateful: data.grateful,
      improvements: data.improvements,
      overallfeeling: overallFeeling ? overallFeeling : 4,
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReflection),
    })
      .then((res) => res.json())
      .then((_) => history.replace('/dashboard'))
      .catch((err) => console.log(err))
  }
  const handleEmoji = (digit) => {
    setOverallFeeling(digit)
  }

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      path: '/images/33645-happy-dog.json',
      // autoplay: true,
      renderer: 'svg',
      // loop: true,
    })
    anim.setSpeed(3)
    // anim.destroy()
  }, [])

  let quote = shortQuotes[Math.floor(Math.random() * shortQuotes.length)]

  useEffect(() => {
    fetch(`https://global-scope.herokuapp.com/topics?date=${getToday()}`)
      .then((res) => res.json())
      .then((data) => {
        const list = data.payload.reduce((acc, cur) => {
          if (!acc.includes(cur.topic)) {
            return [...acc, cur.topic]
          }
          return acc
        }, [])
        setTopicList(list)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <Layout>
      <div
        className='flex flex-col items-center justify-center bg-contain mb-3 bg-no-repeat bg-top pr-4 pl-4 pt-3 '
        style={{ backgroundImage: 'url(/images/addToBlogImage.png' }}
      >
        <div className='bg-white opacity-95'>
          <form
            className={
              ' flex flex-col p-3 container pt-5 bg-contain bg-no-repeat bg-center '
            }
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='flex flex-col border-2 p-2 mb-2'>
              {/* Topics covered */}
              <label htmlFor='topics-section' className='mb-2'>
                What topics have you covered since you were last here? Rate your
                confidence for each from 1-5:
              </label>
              <div className='flex justify-center items-center mb-2'>
                <div className='flex flex-col'>
                  {/* First topic */}
                  <div>
                    <label htmlFor='topicOne'></label>
                    <input
                      id='topicOne'
                      name='firsttopic'
                      list='topics'
                      placeholder='The first topic was...'
                      className={topicInputStyle}
                      {...register('firsttopic', {
                        required: 'Topic is required',
                      })}
                    />
                    <label htmlFor='ratingTopicOne'></label>
                    <input
                      type='number'
                      id='ratingTopicOne'
                      name='firstrating'
                      min='1'
                      max='5'
                      className={topicRatingStyle}
                      {...register('firstrating', {
                        required: 'Rating is required',
                      })}
                    ></input>
                  </div>
                  <div>
                    {errors.firsttopic && (
                      <p className='text-red-400 text-sm'>
                        {errors.firsttopic.message}
                      </p>
                    )}
                    {errors.firstrating && (
                      <p className='text-red-400 text-sm'>
                        {errors.firstrating.message}
                      </p>
                    )}
                  </div>
                </div>
                {/* Topic two */}

                <div className='flex flex-col'>
                  <div>
                    <label htmlFor='topicTwo'></label>
                    <input
                      id='topicTwo'
                      name='secondtopic'
                      list='topics'
                      placeholder='And...'
                      className={topicInputStyle}
                      {...register('secondtopic', {
                        required: 'Topic is required',
                      })}
                    />
                    <label htmlFor='ratingTopicTwo'></label>
                    <input
                      type='number'
                      id='ratingTopicTwo'
                      name='secondrating'
                      min='1'
                      max='5'
                      className={topicRatingStyle}
                      {...register('secondrating', {
                        required: 'Rating is required',
                      })}
                    ></input>
                  </div>
                  <div>
                    {errors.secondtopic && (
                      <p className='text-red-400 text-sm'>
                        {errors.secondtopic.message}
                      </p>
                    )}
                    {errors.secondrating && (
                      <p className='text-red-400 text-sm'>
                        {errors.secondrating.message}
                      </p>
                    )}
                  </div>
                </div>
                {/* Topic three */}

                <div className='flex flex-col'>
                  <div>
                    <label htmlFor='topicThree'></label>
                    <input
                      id='topicThree'
                      name='thirdtopic'
                      list='topics'
                      placeholder='Also...'
                      className={topicInputStyle}
                      {...register('thirdtopic', {
                        required: 'Topic is required',
                      })}
                    />
                    <label htmlFor='ratingTopicThree'></label>
                    <input
                      type='number'
                      id='ratingTopicThree'
                      name='thirdrating'
                      min='1'
                      max='5'
                      className={topicRatingStyle}
                      {...register('thirdrating', {
                        required: 'Rating is required',
                      })}
                    ></input>
                  </div>
                  <div>
                    {errors.thirdtopic && (
                      <p className='text-red-400 text-sm'>
                        {errors.thirdtopic.message}
                      </p>
                    )}
                    {errors.thirdrating && (
                      <p className='text-red-400 text-sm'>
                        {errors.thirdrating.message}
                      </p>
                    )}
                  </div>
                </div>
                {/* Topic four */}

                <div className='flex flex-col'>
                  <div>
                    <label htmlFor='topicFour'></label>
                    <input
                      id='topicFour'
                      name='fourthtopic'
                      list='topics'
                      placeholder='Wait, I nearly forgot...'
                      className={topicInputStyle}
                      {...register('fourthtopic', {
                        required: 'Topic is required',
                      })}
                    />
                    <label htmlFor='ratingTopicFour'></label>
                    <input
                      type='number'
                      id='ratingTopicFour'
                      name='fourthrating'
                      min='1'
                      max='5'
                      className={topicRatingStyle}
                      {...register('fourthrating', {
                        required: 'Rating is required',
                      })}
                    ></input>
                  </div>
                  <div>
                    {errors.fourthtopic && (
                      <p className='text-red-400 text-sm'>
                        {errors.fourthtopic.message}
                      </p>
                    )}
                    {errors.fourthrating && (
                      <p className='text-red-400 text-sm'>
                        {errors.fourthrating.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <datalist id='topics'>
              {topicList.map((topic) => {
                return <option value={topic}></option>
              })}
            </datalist>
            {/* Confidence input */}
            <div className='flex flex-col border-2 p-2 mb-2'>
              <label htmlFor='confidence-range' className='mb-2'>
                How confident do you feel about what you've learned since your
                last reflection?
              </label>

              <Slider
                sx={{ width: 400 }}
                aria-label='Confidence'
                color='secondary'
                defaultValue={3}
                valueLabelDisplay='auto'
                step={1}
                marks
                min={1}
                max={5}
                name='confidence'
                {...register('confidence')}
              />
            </div>

            {/* Grateful for */}

            <div className='flex flex-col border-2 p-2 mb-2'>
              <label htmlFor='grateful' className=' mb-2'>
                In 3 words, what are you grateful for today?
              </label>

              <input
                name='grateful'
                className='input input-primary mb-2'
                {...register('grateful', {
                  required: 'Grateful words are required',
                })}
              />
              {errors.grateful && (
                <p className='text-red-400 text-sm'>
                  {errors.grateful.message}
                </p>
              )}
            </div>
            {/* Improvements input */}

            <div className='flex flex-col border-2 p-2 mb-2'>
              <label htmlFor='improvements' className='mb-2'>
                What could have gone better / What areas would you like to
                improve?
              </label>
              <textarea
                className='textarea h-24 textarea-bordered textarea-primary mb-2'
                id='improvements'
                name='improvements'
                placeholder='Enter your thoughts here...'
                rows='6'
                cols='50'
                {...register('improvements', {
                  required: 'Improvements are required',
                })}
              ></textarea>
              {errors.improvements && (
                <p className='text-red-400 text-sm'>
                  {errors.improvements.message}
                </p>
              )}
            </div>
            {/* Other thoughs */}
            <div className='flex flex-col border-2 p-2 '>
              <label htmlFor='add-thoughts' className='mb-2'>
                Any other thoughts?:
              </label>
              <textarea
                className='textarea h-24 textarea-bordered textarea-primary mb-2'
                id='add-thoughts'
                name='reflection'
                placeholder="I've run out of peanut butter..."
                rows='6'
                cols='50'
                {...register('reflection', {
                  required: 'Reflection is required',
                })}
              />

              {errors.reflection && (
                <p className='text-red-400 text-sm'>
                  {errors.reflection.message}
                </p>
              )}
            </div>
            {/* Accessible toggle */}

            <div className='flex justify-between border-2 p-2 mt-2'>
              <label className=''>Private ?</label>
              <input
                name='private'
                type='checkbox'
                className='toggle toggle-primary'
                {...register('private')}
              />
            </div>
            {/* Overall Feeling input / Emojis */}

            <div className='flex flex-col border-2 p-2 my-2'>
              <label htmlFor='mood' className='mb-8'>
                How are you feeling?
              </label>
              <div className='flex justify-around items-center w-full'>
                <EmojiInput feeling={overallFeeling} emojiClick={handleEmoji} />
              </div>
            </div>
            <button className='btn btn-sm btn-accent m-4'>Post</button>
          </form>
        </div>
      </div>
      <div className='w-1/12   fixed -bottom-8 -right-8  ' ref={container}>
        <div className={css.dog}>
          <p className={css.text}>{quote}</p>
        </div>
      </div>
    </Layout>
  )
}

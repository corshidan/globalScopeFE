import Layout from '../Layout'
// import { useUser } from '../App/App.js';
import css from './index.module.css'

const reflections = [
  {
    bootcamperid: 10,
    reflection:
      'Really enjoyed the day, the vibe is good, high morale, we definitely need to work a bit more on the design of the project.    It feels like there is so much more to work on , maybe a bit overwhelming but slowly and with perseverance we keep going forward',
    accessible: true,
    topics: [
      { topic: 'primitive types', rating: 4 },
      { topic: 'complex types', rating: 2 },
      { topic: 'pass by reference', rating: 3 },
      { topic: 'cognitive load', rating: 5 },
    ],
    confidence: 4,
    grateful: 'how awesome this course is',
    improvements: 'complex types, computational thinking',
    overallFeeling: 5,
  },
]

export default function BlogRecapPage() {
  // const user = useUser();
  return (
    <Layout>
      <div
        className={`${'flex flex-col items-center justify-center h-screen bg-contain bg-no-repeat bg-top pr-4 pl-4 pt-10 '}${
          css.photo
        }`}
        style={{ backgroundImage: 'url(/images/recapBlogImage.png)' }}
      >
        <form className='justify-center items-center bg-white px-2 flex flex-col  bg-green-500 shadow-lg  opacity-95  h-full rounded-3xl '>
          <div className='border-2 bg-white  p-3 pt-10 pb-4 rounded-2xl shadow-inner  '>
            <label htmlFor='start'>What day do you want to review? </label>
            <input
              type='date'
              id='start'
              name='reflection-date'
              min='2021-01-01'
              max='2021-12-31'
            />
            <button className='btn btn-sm btn-accent shadow-md bg-green-400 mb-5 bg-opacity-100  '>
              Search
            </button>
            <br />
            <label htmlFor='topics-section'>
              Topics you have covered on Week 4 day 2, and your confidence
              rating out of 5:
            </label>
            <ul className='flex textarea h-20 textarea-bordered textarea-accent justify-around font-extrabold mt-2 mb-2 '>
              {reflections[0].topics.map((topic, i) => {
                return (
                  <li key={i}>
                    {topic.topic} - {topic.rating}
                  </li>
                )
              })}
            </ul>
            <label htmlFor='confidence-range'>
              How confident did you feel about what you've learned since your
              last reflection?
            </label>
            <p className=' textarea h-5 font-extrabold textarea-accent mt-2 mb-2  '>
              4/5
            </p>
            <label htmlFor='improvements'>What you needed to work on...</label>
            <p className='improvement textarea h-20 textarea-bordered textarea-accent font-extrabold mt-2 mb-2   '>
              {reflections[0].improvements}
            </p>

            <label htmlFor='add-thoughts'>Other thoughts...</label>
            <p className='reflection textarea h-20 textarea-bordered textarea-accent font-extrabold mt-2 mb-2   '>
              {reflections[0].reflection}
            </p>
            <label htmlFor='feeling-score'>How you were feeling?</label>
            <h1>💩</h1>
          </div>
        </form>
      </div>
    </Layout>
  )
}

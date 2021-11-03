import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
// import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
// import { ChakraProvider } from "@chakra-ui/react";
import { PolarArea, Bar } from 'react-chartjs-2'
import { useUser } from '../App/App.js'
import GaugeChart from 'react-gauge-chart'

export default function StatisticsPage() {
  const [confidence, setConfidence] = useState()
  const [feelings, setFeelings] = useState()
  const user = useUser()
  useEffect(() => {
    fetch(`https://global-scope.herokuapp.com/reflections/${user.bootcamperid}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.payload[0].confidence)
        const overallConfidence = data.payload.map(
          (reflection) => reflection.confidence
        )
        // console.log(overallConfidence)

        const feeling = data.payload.map(
          (reflections) => reflections.overallfeeling
        )
        // console.log(feeling)

        const emojiReducer = feeling.reduce((a, c) => a + c)
        const averageFeeling = emojiReducer / feeling.length

        setFeelings(averageFeeling)

        const reducer = overallConfidence.reduce((a, c) => a + c)
        // console.log(reducer)
        const averageConfidence = reducer / overallConfidence.length
        // console.log(averageConfidence)
        setConfidence(averageConfidence)
        // setHighlightedDays(dates)
      })

      .catch((err) => console.log(err))
  }, [user.bootcamperid])

  const findDate = () => {
    const date1 = new Date(user.startdate)
    const date2 = new Date()
    const diffTime = Math.abs(date2 - date1)
    // console.log(diffTime)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    // console.log(diffDays)
    const progressBar = Math.floor((diffDays / 112) * 100)
    // console.log(progressBar)
    return progressBar
  }
  let value = findDate()
  let progressPercentage = findDate() / 100
  let confidencePercentage = Math.round((Math.round(confidence) * 2 - 1) / 10)
  console.log(typeof confidence)
  console.log(confidencePercentage)
  return (
    <Layout>
      <div className='grid grid-cols-3'>
        <div className='flex flex-col self-center items-center pt-6 pb-10 bg-gray-100 w-2/4 rounded-b-xl  mx-auto mt-4 shadow-inner '>
          {/* <ChakraProvider>
            <CircularProgress value={findDate()} size='125px' color='#401485'>
              <CircularProgressLabel> {value}%</CircularProgressLabel>
            </CircularProgress>
          </ChakraProvider> */}
          <GaugeChart
            id='gauge-chart3'
            nrOfLevels={20}
            colors={['rgba(153, 102, 255, 0.5)', 'rgba(20, 220, 20, 0.7)']}
            arcWidth={0.35}
            percent={progressPercentage}
            textColor={'#464A4F'}
            style={{ width: '120%' }}
            needleBaseColor={'#401485'}
            needleColor={'rgba(153, 102, 255, 0.5)'}
            hideText={true}
          />
          <p>{value}%</p>
        </div>
        <div className='flex flex-col justify-center items-center pt-6 pb-10 bg-gray-100 w-2/4 rounded-b-xl  mx-auto mt-4 shadow-inner '>
          {/* <ChakraProvider>
            <CircularProgress value={100} size='125px' color='green'>
              <CircularProgressLabel> 5</CircularProgressLabel>
            </CircularProgress>
          </ChakraProvider> */}
          <GaugeChart
            id='gauge-chart2'
            nrOfLevels={6}
            arcWidth={0.3}
            percent={1}
            colors={['rgba(255, 206, 86, 0.7)', 'rgba(255, 180, 0, 0.9)']}
            style={{ width: '120%' }}
            needleBaseColor={'#401485'}
            needleColor={'rgba(153, 102, 255, 0.5)'}
            hideText={true}
          />

          <img
            className='h-1/5'
            src={`/images/emojis/${Math.round(`${feelings}`)}.png`}
            alt='emoji face'
          />
        </div>
        <div className='flex flex-col justify-center items-center pt-6 pb-10 bg-gray-100 w-2/4 rounded-b-xl  mx-auto mt-4 shadow-inner '>
          {/* <ChakraProvider>
            <CircularProgress value={25} size='125px' color='red'>
              <CircularProgressLabel> 1.8%</CircularProgressLabel>
            </CircularProgress>
          </ChakraProvider> */}
          <GaugeChart
            id='gauge-chart1'
            percent={confidencePercentage}
            nrOfLevels={5}
            arcWidth={0.3}
            style={{ width: '120%' }}
            needleBaseColor={'#401485'}
            needleColor={'rgba(153, 102, 255, 0.5)'}
            hideText={true}
            colors={[
              'rgba(255, 99, 132, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(20, 220, 20, 0.7)',
            ]}
          />
          <p>{confidence}</p>
        </div>
      </div>

      <div className='p-10 grid grid-cols-2 gap-10   '>
        <div className=' bg-gray-100 rounded-l-xl  drop-shadow-2xl  shadow-inner'>
          <PolarArea
            data={{
              labels: ['😭', '🙁', '😐', '🤔', '😀', '🤩 '],
              datasets: [
                {
                  label: 'Overall mood',
                  fill: true,
                  data: [10, 12, 15, 4, 2, 1],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                  ],

                  borderWidth: 3,
                },
                // {
                //   label: 'Quantity',
                //   data: [47, 52, 67, 58, 9, 50],
                //   backgroundColor: 'orange',
                //   borderColor: 'red',
                // },
              ],
            }}
            height={400}
            width={600}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
              legend: {
                labels: {
                  fontSize: 50,
                },
              },
            }}
          />
        </div>
        <div className=' bg-gray-100 rounded-r-xl z-10 shadow-inner'>
          <Bar
            data={{
              labels: ['1', '2', '3', '4', '5'],
              datasets: [
                {
                  label: 'Confidence level',
                  data: [10, 12, 15, 4, 2, 1],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                  ],
                  borderColor: ['white'],
                  borderWidth: 3,
                  fill: true,
                },
                // {
                //   label: 'Quantity',
                //   data: [47, 52, 67, 58, 9, 50],
                //   backgroundColor: 'orange',
                //   borderColor: 'red',
                // },
              ],
            }}
            height={400}
            width={600}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      // type: 'linear',
                      // display: false,
                      offset: true,
                    },
                  },
                ],
              },
              legend: {
                labels: {
                  fontSize: 50,
                },
              },
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

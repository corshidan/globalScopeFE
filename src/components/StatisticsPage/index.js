import React from 'react'
import Layout from '../Layout'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { PolarArea, Bar } from 'react-chartjs-2'
import { useUser } from '../App/App.js'

export default function StatisticsPage() {
  const user = useUser()

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
  return (
    <Layout>
      <div
        className='flex flex-col bg-contain mb-3 w-full h-full bg-no-repeat bg-top pr-4 pl-4 pt-3 bg-gray-200'
        // style={{ backgroundImage: 'url(/images/seeYourStatsImage.png)' }}
      >
        <div className='flex justify-center pt-6 pb-10 bg-gray-300 w-1/4 rounded-b-xl  mx-auto mt-4 '>
          <ChakraProvider>
            <CircularProgress value={findDate()} size='125px' color='#401485'>
              <CircularProgressLabel> {value}%</CircularProgressLabel>
            </CircularProgress>
          </ChakraProvider>
        </div>
        <div className='p-10 grid grid-cols-2 gap-10 z-10  '>
          <div className=' bg-gray-300 rounded-l-xl'>
            <PolarArea
              data={{
                labels: ['😭', '🙁', '😐', '🤔', '😀', '🤩 '],
                datasets: [
                  {
                    label: 'Overall mood',
                    fill: true,
                    data: [10, 12, 15, 4, 2, 1],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)',
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
                    fontSize: 25,
                  },
                },
              }}
            />
          </div>
          <div className=' bg-gray-300 rounded-r-xl z-10 '>
            <Bar
              data={{
                labels: ['1', '2', '3', '4', '5'],
                datasets: [
                  {
                    label: 'Confidence level',
                    data: [10, 12, 15, 4, 2, 1],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)',
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
                    fontSize: 25,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

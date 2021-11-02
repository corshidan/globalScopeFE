
import React from 'react'
import Layout from '../Layout'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Line, Bar } from 'react-chartjs-2'
import { useUser } from '../App/App.js'

export default function StatisticsPage() {
  const user = useUser()

  const findDate = () => {
    const date1 = new Date(user.startdate)
    const date2 = new Date()
    const diffTime = Math.abs(date2 - date1)
    console.log(diffTime)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    console.log(diffDays)
    const progressBar = Math.floor((diffDays / 112) * 100)
    console.log(progressBar)
    return progressBar
  }
  let value = findDate()
  return (
    <Layout>
      {/* <div
        className='flex flex-col bg-contain mb-3 w-full h-full bg-no-repeat bg-top pr-4 pl-4 pt-3 opacity-40 '
        style={{ backgroundImage: 'url(/images/seeYourStatsImage.png)' }}
      > */}
      <div className='flex justify-center pt-6 pb-10 '>
        <ChakraProvider>
          <CircularProgress value={findDate()} size='125px' color='green.400'>
            <CircularProgressLabel> {value}%</CircularProgressLabel>
          </CircularProgress>
        </ChakraProvider>
      </div>
      <div className='p-10 grid grid-cols-2 gap-10  '>
        <div className=''>
          <Line
            data={{
              labels: ['😭', '🙁', '😐', '🤔', '😀', '🤩 '],
              datasets: [
                {
                  label: '# of votes',
                  // fill: true,
                  data: [10, 12, 15, 4, 2, 1],
                  backgroundColor: ['green'],
                  borderColor: ['rgba(153, 102, 255, 1)'],
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
        <div className=''>
          <Bar
            data={{
              labels: ['😭', '🙁', '😐', '🤔', '😀', '🤩 '],
              datasets: [
                {
                  label: '# of votes',
                  data: [10, 12, 15, 4, 2, 1],
                  backgroundColor: ['rgba(153, 102, 255, 1)'],
                  borderColor: ['rgba(153, 102, 255, 1)'],
                  borderWidth: 3,
                  // fill: true,
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
      {/* </div> */}
    </Layout>
  )
}

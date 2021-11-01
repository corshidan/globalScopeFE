import React from 'react'
import Layout from '../Layout'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Line } from 'react-chartjs-2'

export default function StatisticsPage() {
  // const findDate = () => {
  //   const date1 = new Date(user.startdate)
  //   const date2 = new Date(reflectionDate)
  //   const diffTime = Math.abs(date2 - date1)
  //   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  //   const dateOfBootcamp = `Week ${Math.ceil(diffDays / 7)} day ${
  //     (diffTime % 7) + 1
  //   }`
  //   setBootcampDate(dateOfBootcamp)
  // }
  return (
    <Layout>
      <div className='flex justify-center mt-10'>
        <ChakraProvider>
          <CircularProgress value={85} size='125px' color='green.400'>
            <CircularProgressLabel>33%</CircularProgressLabel>
          </CircularProgress>
        </ChakraProvider>
      </div>
      <div>
        <Line
          data={{
            labels: ['😭', '🙁', '😐', '🤔', '😀', '🤩 '],
            datasets: [
              {
                label: '# of votes',
                data: [10, 12, 15, 4, 2, 1],
                backgroundColor: ['rgba(153, 102, 255, 1)'],
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
    </Layout>
  )
}

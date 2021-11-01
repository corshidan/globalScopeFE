import React from 'react'
import Layout from '../Layout'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Pie } from 'react-chartjs-2'

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
        <Pie
          data={{
            labels: [
              'Crying',
              'Sad',
              'Neutral',
              'Confused',
              'Happy',
              'Star Struck',
            ],
            datasets: [
              {
                label: '# of votes',
                data: [10, 12, 15, 4, 2],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
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
    </Layout>
  )
}

import React from 'react'
import Layout from '../Layout'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Bar } from 'react-chartjs-2'

export default function StatisticsPage() {
  return (
    <Layout>
      <div className='flex justify-center mt-10'>
        <ChakraProvider>
          <CircularProgress value={33} size='125px' color='green.400'>
            <CircularProgressLabel>33%</CircularProgressLabel>
          </CircularProgress>
        </ChakraProvider>
      </div>
      </Layout>
  )
}

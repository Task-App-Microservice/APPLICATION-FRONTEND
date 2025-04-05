import React from 'react'
import { ChartOne } from './chart-one'
import ProgressTask from './progress'

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        <ChartOne />
        <ProgressTask />
        <ChartOne />
      </div>
    </div>
  )
}

export default Dashboard

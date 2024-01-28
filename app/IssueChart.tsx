'use client'
import { Card } from '@radix-ui/themes'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
interface Issues {
  open: number
  closed: number
  inProgress: number
}

const IssueChart = ({ issues }: { issues: Issues }) => {
  const data = [
    { label: 'Open', value: issues.open },
    { label: 'In-progress', value: issues.inProgress },
    { label: 'Closed', value: issues.closed },
  ]
  return (
    <Card>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={data}>
          <XAxis dataKey='label' />
          <YAxis />
          <Bar
            dataKey='value'
            barSize={60}
            style={{ fill: 'var(--accent-9)' }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default IssueChart

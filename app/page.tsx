import { Status } from '@prisma/client'
import prisma from '../prisma/client'
import IssueChart from './IssueChart'
import IssueSummary from './IssueSummary'
import LatestIssues from './LatestIssues'
import { Flex, Grid } from '@radix-ui/themes'
import { Metadata } from 'next'

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: Status.OPEN } })
  const closed = await prisma.issue.count({ where: { status: Status.CLOSED } })
  const inProgress = await prisma.issue.count({
    where: { status: Status.IN_PROGRESS },
  })
  const issues = {
    open,
    closed,
    inProgress,
  }
  return (
    <Grid columns={{ initial: '1', md: '2' }} gap='5'>
      <Flex direction='column' gap='5'>
        <IssueSummary issues={issues} />
        <IssueChart issues={issues} />
      </Flex>
      <LatestIssues />
    </Grid>
  )
}

export const metadata: Metadata = {
  title: 'Issue Tracker - Dashboard',
  description: 'View a summary of project issues',
}

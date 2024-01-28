import { Status } from '@prisma/client'
import prisma from '../prisma/client'
import IssueChart from './IssueChart'
import IssueSummary from './IssueSummary'
import LatestIssues from './LatestIssues'
import { Flex, Grid } from '@radix-ui/themes'

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: Status.OPEN } })
  const closed = await prisma.issue.count({ where: { status: Status.CLOSED } })
  const inProgress = await prisma.issue.count({
    where: { status: Status.IN_PROGRESS },
  })
  return (
    <Grid columns={{ initial: '1', md: '2' }} gap='5'>
      <Flex direction='column' gap='5'>
        <IssueSummary open={open} closed={closed} inProgress={inProgress} />
        <IssueChart open={open} closed={closed} inProgress={inProgress} />
      </Flex>
      <LatestIssues />
    </Grid>
  )
}

import { Status } from '@prisma/client'
import prisma from '../prisma/client'
import IssueChart from './IssueChart'
import IssueSummary from './IssueSummary'
import LatestIssues from './LatestIssues'

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: Status.OPEN } })
  const closed = await prisma.issue.count({ where: { status: Status.CLOSED } })
  const inProgress = await prisma.issue.count({
    where: { status: Status.IN_PROGRESS },
  })
  return (
    <>
      <IssueSummary open={open} closed={closed} inProgress={inProgress} />
      <LatestIssues />
      <IssueChart open={open} closed={closed} inProgress={inProgress} />
    </>
  )
}

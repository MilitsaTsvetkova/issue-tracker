import prisma from '@/prisma/client'
import { Box, Flex, Grid } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import DeleteIssueButton from './DeleteIssueButton'
import EditIssueButton from './EditIssueButton'
import IssueComponent from './IssueComponent'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/authOptions'
import AssigneeSelect from './AssigneeSelect'

interface Props {
  params: { id: string }
}

const IssueDetailsPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions)
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  })
  if (!issue) notFound()
  return (
    <Grid columns={{ initial: '1', sm: '5' }} gap='5'>
      <Box className='md:col-span-4'>
        <IssueComponent issue={issue} />
      </Box>
      {session && (
        <Box>
          <Flex direction='column' gap='4'>
            <AssigneeSelect issue={issue} />
            <EditIssueButton issueId={issue.id} />
            <DeleteIssueButton issueId={issue.id} />
          </Flex>
        </Box>
      )}
    </Grid>
  )
}

export default IssueDetailsPage

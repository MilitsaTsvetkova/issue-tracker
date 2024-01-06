import { Card, Flex, Heading, Text } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import prisma from '../../../prisma/client'
import IssueStatusBadge from '../../components/IssueStatusBadge'
import Markdown from 'react-markdown'

interface Props {
  params: { id: string }
}

const IssueDetailsPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  })
  if (!issue) notFound()
  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex gap='5' my='2'>
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className='prose' mt='4'>
        <Markdown>{issue.description}</Markdown>
      </Card>
    </div>
  )
}

export default IssueDetailsPage

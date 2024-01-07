import { Issue } from '@prisma/client'
import { Card, Flex, Heading, Text } from '@radix-ui/themes'
import Markdown from 'react-markdown'
import { IssueStatusBadge } from '../../components'

const IssueComponent = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <Heading>{issue.title}</Heading>
      <Flex gap='5' my='2'>
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className='prose' mt='4'>
        <Markdown>{issue.description}</Markdown>
      </Card>
    </>
  )
}

export default IssueComponent

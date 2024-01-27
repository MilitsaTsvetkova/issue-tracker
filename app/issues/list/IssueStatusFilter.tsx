'use client'
import { Status } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import React from 'react'
const statuses: { label: string; value?: Status }[] = [
  { label: 'All' },
  { label: 'Open', value: 'OPEN' },
  { label: 'Closed', value: 'CLOSED' },
  { label: 'In Progress', value: 'IN_PROGRESS' },
]

const IssueStatusFilter = () => {
  const router = useRouter()
  const changeStatus = (status: string) => {
    const query = status !== 'unassigned' ? `?status=${status}` : ''
    router.push(`/issues/list${query}`)
  }
  return (
    <Select.Root onValueChange={changeStatus}>
      <Select.Trigger placeholder='Filter by status...'></Select.Trigger>
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item key={status.value} value={status.value ?? 'unassigned'}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  )
}

export default IssueStatusFilter
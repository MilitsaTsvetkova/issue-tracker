import Pagination from './components/Pagination'

export default function Home({
  searchParams,
}: Readonly<{
  searchParams: { page: string }
}>) {
  return (
    <Pagination
      pageSize={10}
      currentPage={parseInt(searchParams.page)}
      itemCount={200}
    />
  )
}

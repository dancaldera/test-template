'use client'

import useSWR from 'swr'
import Link from 'next/link'

const fetcher = url => fetch(url).then(res => res.json())

export default function Profile({ params }) {
  const { data, error, isLoading } = useSWR(process.env.NEXT_PUBLIC_API_URL + '/users/' + params.id, fetcher)

  if (error) return 'An error has occurred.'
  if (isLoading) return 'Loading...'

  return (
    <main>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
      <Link href='/'>Back</Link>
    </main>
  )
}

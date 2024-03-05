'use client'

import useSWR from 'swr'
import Link from 'next/link'

const fetcher = url => fetch(url).then(res => res.json())

export default function Home() {
  const { data, error, isLoading } = useSWR(process.env.NEXT_PUBLIC_API_URL + '/users', fetcher)

  if (error) return 'An error has occurred.'
  if (isLoading) return 'Loading...'

  return (
    <main>
      <h1>Users</h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>
            <Link href={`/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

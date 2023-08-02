'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { toast } from 'react-hot-toast'

export default function Home() {
  const { data: session, status } = useSession()

  if (status === 'authenticated') {
    return <p>Signed in as {session?.user?.name}</p>
  }

  return <button onClick={() => signIn('spotify')}>Sign In</button>
}

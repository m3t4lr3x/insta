import React from 'react'
import Posts from './Posts'
import Stories from './Stories'

export default function Feed() {
  return (
    <main className='max-w-6xl mx-4 xl:mx-auto'>
        <section>
            {/* Stories */}
            <Stories />
            {/* POST */}
            <Posts />
        </section>
        <section>
            {/* Mini Profile */}
            {/* Suggestion */}
        </section>
    </main>
  )
}

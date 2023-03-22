"use client"
import React from 'react'
import Posts from './Posts'
import Stories from './Stories'

export default function Feed() {
  return (
    <main>
      <section>
        {/* stories */}
            <Stories/>
        {/* posts */}
        <Posts/>
      </section>

      <section>
        {/* ministories */}

        {/* suggestions */}
      </section>
    </main>
  )
}

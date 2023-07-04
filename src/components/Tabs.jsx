"use client"
import Link from 'next/link'
import React from 'react'
import {useSearchParams} from 'next/navigation'

const Tabs = async () => {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')


    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`)
    const tabs = await res.json()

  return (
    <div className='p-5 my-5 bg-gray-200 dark:bg-gray-800 flex flex-wrap items-center justify-center gap-7'>
        {
            tabs.genres.map((tab, i) => (
                <Link className={`text-lg font-semibold cursor-pointer hover:opacity-75 transition-opacity ${tab.id == genre ? "underline underline-offset-8 text-sky-500 " : ""}`} href={`/?genre=${tab.id}`}>{tab.name}</Link>
        ))
        }
    </div>
    
  )
}

export default Tabs
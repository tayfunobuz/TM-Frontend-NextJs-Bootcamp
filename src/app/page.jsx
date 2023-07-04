import Movies from '@/components/Movies';
import React from 'react'

const Page = async ({searchParams}) => {
    

    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US${searchParams.genre ? "&with_genres=" + searchParams.genre : ""}`, 
    {next: { revalidate: 10000 }})

    const data = await res.json();


  return (
    <div className='flex items-center justify-center flex-wrap gap-3 bg-stone-200 dark:bg-stone-900'>
        {
          data?.results?.map((dt,i) => (
            <Movies key={i} dt={dt}/>
          ))
        }  
    </div>
  )
}

export default Page
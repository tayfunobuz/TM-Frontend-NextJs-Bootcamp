import Movies from '@/components/Movies';
import React from 'react'

const Page = async ({searchParams}) => {

    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=58012d649375f0295b5bbccae0a917f3&language=en-US&page=1${searchParams.genre ? "&with_genres=" + searchParams.genre : ""}`, 
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
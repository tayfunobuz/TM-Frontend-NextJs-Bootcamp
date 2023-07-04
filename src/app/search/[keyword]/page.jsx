import Movies from '@/components/Movies';
import React from 'react'

const Page = async ({params}) => {
    const keyword = params.keyword;


    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${keyword}&language=en-US&include_adult=false`)
    const data = await res.json();

  return (
    <div>
        {
            !data.results ?
            <div></div>:
            <div className='flex items-center justify-center flex-wrap gap-3 bg-stone-200 dark:bg-stone-900 imGContainer'>
                {
                    data?.results?.map((dt,i) => (
                        <Movies key={i} dt={dt}/>
                    ))
                }
            </div>
            
        }
    </div>
  )
}

export default Page
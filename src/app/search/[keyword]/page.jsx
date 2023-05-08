import Movies from '@/components/Movies';
import React from 'react'

const Page = async ({params}) => {
    const keyword = params.keyword;

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=58012d649375f0295b5bbccae0a917f3&query=${keyword}&language=en-US&include_adult=false`)
    const data = await res.json();

  return (
    <div>
        {
            !data.results ?
            <div></div>:
            <div className='flex flex-wrap gap-3 justify-center items-center'>
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
import React from 'react'
import Image from 'next/image'

const getMovie = async (id) => {
  

    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    return await res.json();
}

const Page = async ({params}) => {
    const id = params.id;
    const movieDetail = await getMovie(id)

  return (
    <div className='relative p-7 min-h-screen'>
        <Image className='blur-sm' style={{objectFit: 'cover'}} fill src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`}/>
        <div className='absolute bg-gray-700 bg-opacity-40 rounded-lg'>
            <div className='text-4xl font-bold my-3'>{movieDetail?.title}</div>
            <div className='w-1/2'>{movieDetail?.overview}</div>
            <div className='my-3'>{movieDetail?.release_date} - {movieDetail?.vote_average}</div>
        </div>
    </div>
  )
}

export default Page
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import noPoster from '../assets/no-poster.png'
import CircleRating from '../components/CircleRating'
import GenresSection from '../components/GenresSection'
import Image from '../components/Image'

const MovieCard = ({data,mediaType}) => {

    const {url}=useSelector((state)=>state.home)

    const navigate=useNavigate();

    const posterUrl = data?.poster_path ? url.poster + data.poster_path: noPoster;

  return (
    <div className="xs:h-52 xs:w-24 lg:h-96 lg:w-64" onClick={() =>navigate(`/${data.media_type || mediaType}/${data.id}`)}>
            <div className="xs:h-36 lg:h-72  xs:w-24 lg:w-48">
                <Image className="rounded-md" src={posterUrl} />
                
                <div className='xs:hidden lg:flex justify-between items-end h-12 -mt-16 mx-2'>
                    <CircleRating rating={data.vote_average.toFixed(1)} />
                    <GenresSection data={data.genre_ids.slice(0, 2)} />
                </div>
                
            </div>
            <div className="flex flex-col xs:w-24 lg:w-48">
                <span className="xs:text-md lg:text-xl xs:mb-1 lg:mb-2 truncate ">{data.title || data.name}</span>
                <span className="opacity-50">
                    {dayjs(data.release_date).format("D MMM YYYY")}
                </span>
            </div>
        </div>
  )
}

export default MovieCard

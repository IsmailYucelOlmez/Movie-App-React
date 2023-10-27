import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import DetailsBanner from './detailspage/DetailsBanner'

const DetailsPage = () => {

  const params=useParams();
  
  const {data,loading}=useFetch(`/${params.mediaType}/${params.id }/videos`);
  const {data:creditsData,loading:creditsLoading}=useFetch(`/${params.mediaType}/${params.id }/credits`);

  
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={creditsData?.crew}/>
    </div>
  )
}

export default DetailsPage

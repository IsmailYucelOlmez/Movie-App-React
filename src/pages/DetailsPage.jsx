import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import DetailsBanner from './detailspage/DetailsBanner'
import CastSection from './detailspage/CastSection';
import VideosSection from './detailspage/VideosSection';
import Recommedations from './detailspage/Recommedations';
import SimilarSection from './detailspage/SimilarSection';


const DetailsPage = () => {

  const params=useParams();
  
  const {data,loading}=useFetch(`/${params.mediaType}/${params.id }/videos`);
  const {data:creditsData,loading:creditsLoading}=useFetch(`/${params.mediaType}/${params.id }/credits`);

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[])


  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={creditsData?.crew}/>
      <CastSection data={creditsData?.cast?.slice(0,10)} loading={creditsLoading}/>
      <VideosSection data={data} loading={loading} />
      <SimilarSection mediaType={params.mediaType} id={params.id}/>
      <Recommedations mediaType={params.mediaType} id={params.id}/>
    </div>
  )
}

export default DetailsPage

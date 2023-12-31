import React from 'react'
import Carousel from '../../components/Carousel';
import useFetch from '../../hooks/useFetch';

const SimilarSection = ({mediaType,id}) => {
    
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

  return (
    <div className='lg:container mb-10'>

        <div className=' xs:w-full lg:w-3/4 xs:px-4 lg:px-0 mx-auto'>
        
          <h1 className='xs:text-2xl lg:text-3xl xs:mb-1 lg:mb-2'>{title}</h1>  

          <Carousel data={data?.results} loading={loading}/>
         
        </div>

      
    </div>
  )
}

export default SimilarSection

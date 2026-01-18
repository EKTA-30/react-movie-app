import React from 'react'

const MovieCard = ({id, movie : {title,popularity,poster_path, release_date,vote_average, original_language}}) => {
  return (
    <div className='movie-card'>
        <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : `../../public/assets/No-Poster.png`} alt={title} />
         
         <div className='mt-4'>
         <h3 className="text-white">{title}</h3>

         <div className='content'>
            <div className='rating'>
                <img src="../../public/assets/vuesax/bold/star-1.png" alt="star" />
                <p>{vote_average ? vote_average.toFixed(1) : 'NA'}</p>
            </div>
            <span>.</span>
            <p className='lang'>{original_language}</p>
            <span>.</span>
            <p className='text-white'>{release_date ? release_date.split("-")[0] : 'NA'}</p>
         </div>
         </div>
    </div>
  )
}

export default MovieCard
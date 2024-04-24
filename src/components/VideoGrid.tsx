import React from 'react'
import VideoCard from './VideoCard'

const VIDEOS =[{
  title: 'Code with me',
  image: '/place.jpg',
  thumbImage: '/place.jpg',
  author: 'Author',
  views: '100k',
  timestamp: '2 days ago'
},
{
  title: 'Code with me',
  image: '/place.jpg',
  thumbImage: '/place.jpg',
  author: 'Author',
  views: '100k',
  timestamp: '2 days ago'
},
{
  title: 'Code with me',
  image: '/place.jpg',
  thumbImage: '/place.jpg',
  author: 'Author',
  views: '100k',
  timestamp: '2 days ago'
},
{
  title: 'Code with me',
  image: '/place.jpg',
  thumbImage: '/place.jpg',
  author: 'Author',
  views: '100k',
  timestamp: '2 days ago'
},
]

const VideoGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
      {VIDEOS.map(video => <div>
        <VideoCard title={video.title}
        image={video.image}
        thumbImage={video.thumbImage}
        author={video.author}
        views={video.views}
        timestamp={video.timestamp}
        />
      </div>)}
    </div>
  )
}

export default VideoGrid
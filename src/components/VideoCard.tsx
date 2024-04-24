import React from 'react'

const VideoCard = (props: any) => {
  return (
    <div>
      <img className='h-50px w-50px rounded-xl p-3' src={props.image} />
      <div className='grid grid-cols-12'>
        <div className='col-span-1'>
        <img className='rounded-full w-12 h-12 pt-3 ' src={props.thumbImage} />
        </div>
        <div className='col-span-11 pt-3'>
          <div>
          {props.title}
          </div>
        <div className='col-span-11 text-gray-400 text-base'>
          {props.author}
        </div>
        <div className='col-span-11 text-gray-400 text-base'>
          {props.views} | {props.timestamp}
        </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
import React from 'react';
import ReactPlayer from 'react-player';
import { useRef } from 'react';
const VIDEO_PATH = 'https://www.youtube.com/watch?v=35npVaFGHMY?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1';

const Video = () => {
  const playerRef = useRef(null);
  return (
    <div className='mt-10 mb-20 relative'>
      <ReactPlayer width='100%'
        height='600px' frameborder="0" ref={playerRef} url={VIDEO_PATH} controls={true} />
      <div className="absolute text-center transform -translate-y-1/2 left-1/3 top-2/3">
        <h2 className="text-yellow-400 text-5xl font-bold">
           Travelling Highlights
        </h2>
      </div>
    </div>
  );
};

export default Video;
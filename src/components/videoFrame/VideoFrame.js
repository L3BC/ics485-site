import React from 'react';
import PropTypes from 'prop-types';

const VideoFrame = ({ videoLink }) => (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://youtu.be/${videoLink}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
    // <div class="embed-responsive embed-responsive-16by9">
    //   <video src={videoLink} controls />
    // </div>
  );
  
  VideoFrame.propTypes = {
    videoLink: PropTypes.string.isRequired
  };
  
  export default VideoFrame;
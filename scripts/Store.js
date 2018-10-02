'use strict';
const Store = (function() {
  const videos = [];

  const setVideos = function(videos){
    this.videos = videos;
  };

  return {
    videos,
    setVideos
  };
}());



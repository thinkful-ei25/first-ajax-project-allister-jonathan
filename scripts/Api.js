'use strict';

const Api = (function () {
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  const fetchVideos = function (searchTerm, callback) {
    const query = {
      maxResults: 25,
      part: 'snippet',
      q: `${searchTerm}`,
      type: '',
      key: API_KEY
    }

    const decoratedResponse = $.getJSON(BASE_URL, query, callback);

  };

  const decorateResponse = function (decoratedResponse) {
    return response.items.map(item => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default.url,
      };
    });
    
  };
  
  return {
    fetchVideos
  };

}

  ());
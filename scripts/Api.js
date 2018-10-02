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
    };

    const test = $.getJSON(BASE_URL, query, callback);
    for (var key in test) {
      console.log(key);
    }

  };

  const decorateResponse = function(response) {
    return response.items.map(item => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default.url
      
      };
    });
  };

  return {
    fetchVideos,
    decorateResponse
  };

}

());
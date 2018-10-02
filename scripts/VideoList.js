
'use strict';

const VideoList = (function() {

  const generateListItem = function(video) {
    return `
      <li data-video-id="${video.id}">
        <h3>${video.title}<h3>
        <div><a href="https://www.youtube.com/watch?v=${video.id}"><img src="${video.thumbnail}"></a></div>
      <li>`;
  };


  const handleFormSubmit = function() {
    $('form').submit(event => {
      event.preventDefault();
      const searchTerm =$('#search-term').val();
      $('#search-term').val('');
      Api.fetchVideos(searchTerm, response => {
        const decoratedResponse = Api.decorateResponse(response);
        Store.setVideos(decoratedResponse);
        render();
      });
  
    });
  };
  
  const render = function() {
    const html = Store.videos.map(video => generateListItem(video));
    $('.results').html(html);
  };

  const bindEventListerner = function() {
    $(function () {
      // TASK:
      // 1. Run `handleFormSubmit` to bind the event listener to the DOM
      handleFormSubmit();
    });
  }


  return{
    render,
    bindEventListerner,
  };
}());
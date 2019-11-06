var searchYouTube = (options, callback = () => {}) => {
  // TODO
  $.get('https://www.googleapis.com/youtube/v3/search', options, function(data) {
    callback(data.items);
  });
};

export default searchYouTube;


// GET https://www.googleapis.com/youtube/v3/search



// $.get( "ajax/test.html", function( data ) {
//   $( ".result" ).html( data );
//   alert( "Load was performed." );
// });
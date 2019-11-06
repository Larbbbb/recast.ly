import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import YOUTUBE_API_KEY from '../config/youtube.example.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      video: exampleVideoData[0],
      videos: exampleVideoData
    };
  }

  componentDidMount() {

    var runAfterSuccess = function(data) {
      this.setState({videos: data, video: data[0]});
    };

    searchYouTube({part: 'id, snippet', q: 'tech news', maxResults: 5, key: YOUTUBE_API_KEY}, runAfterSuccess.bind(this));

  }

  changeVideo(videoClicked) {
    this.setState({video: videoClicked});
  }

  changeVideoList(searchResult) {
    this.setState({videos: searchResult});
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em><Search changeVideoList={this.changeVideoList.bind(this)}/></em></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer {...this.state} /></em></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em><VideoList {...this.state} changeVideo={this.changeVideo.bind(this)}/></em></h5></div>
          </div>
        </div>
      </div>);
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;

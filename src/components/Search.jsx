import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.example.js';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  handleChange(e) {

    var debounced = _.debounce(() => this.submitSearch( this.state.input, this.props.changeVideoList), 500);

    this.setState({ input: e.target.value }, debounced);
  }

  submitSearch(query, callback) {
    searchYouTube({part: 'id, snippet', q: query, maxResults: 5, key: YOUTUBE_API_KEY}, callback);
  }


  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.handleChange.bind(this)}/>
        <button className="btn hidden-sm-down" onClick={() => this.submitSearch( this.state.input, this.props.changeVideoList)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;

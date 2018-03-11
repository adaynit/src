 import React, {Component} from 'react';
 import ReactDOM from 'react-dom';
 import YTSearch from 'youtube-api-search';

 import SearchBar from './components/search_bar';
 import VideoList from './components/video_list.js';

 const API_KEY = 'AIzaSyAvMDZG5r_ZJh1Pz54s5-QXvEoe9Y3_nqU';

 
 //create a new component. This component should produce
 // some HTML
 class App extends Component {
constructor(props){
  super(props);
  this.state = { videos: [] };
 
  YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
    this.Setstate = ({ videos});
  });
}
  render(){
return ( 
<div>
  <SearchBar />
  <VideoList videos = {this.state.videos} />
  </div>
  );
}
}
 //Take this component's generated HTML and put it
 //on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));

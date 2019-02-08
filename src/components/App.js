import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';


class App extends React.Component{
  constructor(props){
    super(props);
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
  };

  render(){
    return (
      <SearchBar onFormSubmit={this.onTermSubmit}/>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

const API_KEY = 'aHi5kZ49h4esZTalKqyvkBO2llvuHeJr';
const GIPHY_URL = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=bears`;
const DEFAULT_STATE = {
  imageUrl: 'https://media2.giphy.com/media/JFqi3YfZmn3Og/giphy.gif',
}

class App extends Component {

  state = DEFAULT_STATE;

  fetchImage = () => {
    fetch(GIPHY_URL)
      .then(response => response.json())
      .then(data => {
        const imageUrl = data.data.images.original.url;
        this.setState({ imageUrl });
      });
  }

  render() {
    const { imageUrl } = this.state;

    return (
      <div className="App">
        <button className="button" onClick={this.fetchImage}>Fetch Image</button>
        <img alt="Bear GIF" src={imageUrl} />
      </div >
    );
  }
}

export default App;

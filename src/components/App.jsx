import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";

import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {

  state = {
    search: '',
  }
  handleSubmit = ({ search }) => {
    this.setState({ search })
  };
  render() {
    return (
      <div
        style={{
          display: 'flex',
          gridGap: 16,
          paddingBottom: 24,
          flexDirection: 'column',
        }}
      >
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery search={this.state.search} >
        </ImageGallery >


        {/*
            
              
                <Button>
                  <Modal></Modal> */}
      </div >
    );
  }

};

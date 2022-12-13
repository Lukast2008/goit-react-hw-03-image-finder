import { Component } from 'react';

import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { GetDataArr } from './ApiGallery/ApiGallery';

export class App extends Component {
  state = {
    dataArr: [],
    page: 1,
    searchItems: '',
    showGallery: false,
    isLoading: false,
    error: null,
    largeImageURL: '',
  };



  componentDidUpdate(prevState) {
    if (this.state.showGallery) {
      this.getData();
      this.setState(() => ({ showGallery: false }));
    }
  }

  getData = () => {
    this.setState({ isLoading: true });
    const fir = this.state.searchItems;
    const sec = this.state.page;

    GetDataArr(fir, sec)
      .then(data => {
        this.setState({ dataArr: data });
      })
      .catch(console.log)
      .finally(this.setState({ isLoading: false }));
  };

  // data.hits
  loadMore = () => {
    this.setState(prevState => ({
      showGallery: true,
      page: prevState.page + 1,
    }));
  };

  onSubmit = ({ value }) => {
    this.setState(() => ({ showGallery: true, searchItems: value, page: 1 }));
  };

  openModal = data => {
    this.setState({ largeImageURL: data });
  };

  closeModal = () => {
    console.log("What")
    this.setState({ largeImageURL: null });
  };

  render() {
    return (
      <div>
        <SearchBar
          onsubmit={this.onSubmit}
          onchange={this.state.searchItems}
          // page={this.state.page}
        />
        {/* <GetDataArr searchItems={this.state.searchItems }page={this.state.page}  /> */}
        <ImageGallery
          gallery={this.state.dataArr}
          largeImage={this.state.largeImageURL}
          openModal={this.openModal}
        />
        <Button text="Load more" handleClickMore={this.loadMore} />
        <Loader loud={this.state.isLoading} />
        {this.state.largeImageURL && (
          <Modal largeImage={this.state.largeImageURL} closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}

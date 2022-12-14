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
    if (this.state.showGallery && this.state.searchItems) {
      this.getData();
      this.setState(() => ({ showGallery: false }));
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 1000);
    }
  }

  getData = () => {
    const search = this.state.searchItems;
    const page = this.state.page;
    this.setState({ isLoading: true });
    GetDataArr(search, page)
      .then(data => {
        this.setState({ dataArr: data });
      })
      .catch(console.log);
  };

  loadMore = () => {
    this.setState({ isLoading: true });
    this.setState(prevState => ({
      showGallery: true,
      page: prevState.page + 1,
    }));
  };

  onSubmit = ({ val }) => {
    this.setState(() => ({ showGallery: true, searchItems: val, page: 1 }));
  };

  openModal = data => {
    this.setState({ largeImageURL: data });
  };

  closeModal = () => {
    this.setState({ largeImageURL: null });
  };

  render() {
    return (
      <div>
        <SearchBar onsubmit={this.onSubmit} />
        <ImageGallery
          gallery={this.state.dataArr}
          largeImage={this.state.largeImageURL}
          openModal={this.openModal}
        />
        <Button text="Load more" handleClickMore={this.loadMore} />
        <Loader loud={this.state.isLoading} />
        {this.state.largeImageURL && (
          <Modal
            largeImage={this.state.largeImageURL}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}

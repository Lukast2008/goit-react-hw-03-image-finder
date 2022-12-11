import { Component } from "react"

export class App extends Component{
  state = {
    APIkey: "14585598-21e1bf9412731d0128a8b3ac3",
    page: 1,
    per_page: 12,
  }

// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL


  componentDidMount() {
    // https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12,
  }

  render() {
    return (
      <>
        <Pixsaby/>
      </>
    
    );
  }
  
};

import React from 'react';
import config from '../config';

import './Book.css';

class Book extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        rank: 0,
        title: "",
        author: "",
        book_image: "",
        amazon_product_url: ""
      };
    }
  
    hardcoverFictionURL = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=';
    mykey = config.MY_KEY;

    combinedPrintAndEbookNonfictionURL = 'https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=';
    combinedPrintAndEbookFictionURL = 'https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=';

    componentDidMount() {
        fetch(this.hardcoverFictionURL + this.mykey)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.results.books
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    handleGetRandomRank = (e) => {
      this.setState({
        rank: Math.floor(Math.random() * 15) + 1,
        rank1: Math.floor(Math.random() * 15) + 2,
        rank2: Math.floor(Math.random() * 15) + 4,
        rank3: Math.floor(Math.random() * 15) + 0,
      })
    };

    //handleGetRandomRank = (e) => {
    //  this.setState({
    //    rank1: Math.floor(Math.random() * 15) + 2
    //  })
    //};
  
    render() {
      let { error, isLoaded, items, rank, rank1, rank2, rank3 } = this.state;
      if (error || !items[rank1] || !items[rank] || !items[rank2] || !items[rank3]) {
        return <button className="" onClick={this.handleGetRandomRank}>Best Sellers</button>

      } 
      else if (!isLoaded) {
        return <div>Loading...</div>;
      }
      //if user is first landing on the page, only display button 
      else if (!rank) {
        return <button className="" onClick={this.handleGetRandomRank}>Best Sellers</button>
      }
      else {
        return (
          <div className="content">
            <div>
              <button className="" onClick={this.handleGetRandomRank}>Best Sellers</button>
            </div>
            <div className="book">
              <img src={items[rank].book_image} alt="Book cover"/>
              <h3>{items[rank].title}</h3>
              <h4>Author: {items[rank].author}</h4>
              <h5>{items[rank].description}</h5>
              <a href={items[rank].amazon_product_url}>Amazon URL</a>
            </div>
            <div className="book1">
              <img src={items[rank1].book_image} alt="Book cover"/>
              <h3>{items[rank1].title}</h3>
              <h4>Author: {items[rank1].author}</h4>
              <h5>{items[rank1].description}</h5>
              <a href={items[rank1].amazon_product_url}>Amazon URL</a> 
            </div>
            <div className="book2">
              <img src={items[rank2].book_image} alt="Book cover"/>
              <h3>{items[rank2].title}</h3>
              <h4>Author: {items[rank2].author}</h4>
              <h5>{items[rank2].description}</h5>
              <a href={items[rank2].amazon_product_url}>Amazon URL</a> 
            </div>
            <div className="book3">
              <img src={items[rank3].book_image} alt="Book cover"/>
              <h3>{items[rank3].title}</h3>
              <h4>Author: {items[rank3].author}</h4>
              <h5>{items[rank3].description}</h5>
              <a href={items[rank3].amazon_product_url}>Amazon URL</a> 
            </div>
          </div>
        );
      }
    }

}

export default Book;
import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { NewsCard } from "../../components/NewsCard";

// import { Input, TextArea, FormBtn } from "../components/Form";

class NewsFeed extends Component {
  state = {
    articles: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount = () => {
    this.loadFeed();
  }

  loadFeed = () => {
    API.getArticles()
      .then(res =>
        {this.setState({ articles: res.data, title: "", author: "", synopsis: "" })
        console.log(res.data)}
      )
      .catch(err => console.log(err));
  };

  // deleteArticle = id => {
  //   API.deleteArticle(id)
  //     .then(res => this.loadArticles())
  //     .catch(err => console.log(err));
  // };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.title && this.state.author) {
//       API.saveBook({
//         title: this.state.title,
//         author: this.state.author,
//         synopsis: this.state.synopsis
//       })
//         .then(res => this.loadBooks())
//         .catch(err => console.log(err));
//     }
//   };

  render() {
    return (
      <Container>
        <Row>
          <Col size="12">
              <h1>Latest News</h1>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    {/* <Link to={"/articles/" + article._id}>
                      <strong>
                        {article.title} by {article.author}
                      </strong>
                    </Link> */}
                    <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                    <NewsCard 
                      colSize={ "12" } 
                      cardTitle={ article.title }
                      cardSub={ article.author }
                      cardText={ article.synopsis }
                      cardTextColor={ "white-text" }
                      cardColor={ "blue-grey" }
                      cardAction={ 
                        <Link to={"/articles/" + article._id}>
                          <span>
                            Read
                          </span>
                        </Link> 
                      }
                    > 
                    </NewsCard>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No News to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewsFeed;
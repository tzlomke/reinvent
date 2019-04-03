import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { NewsCard, CardOutline } from "../../components/NewsCard";
import moment from 'moment';
import { Title, SubTitle } from "../../components/Title";

import "./style.css";

// import { Input, TextArea, FormBtn } from "../components/Form";

class NewsFeed extends Component {
  state = {
    articles: [],
    title: "",
    author: "",
    content: "",
    date: ""

  };

  componentDidMount = () => {
    this.loadFeed();
  }

  loadFeed = () => {
    API.getArticles()
      .then(res =>
        {this.setState({ articles: res.data, title: "", author: "", content: "", date: "" })
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
//         content: this.state.content
//       })
//         .then(res => this.loadBooks())
//         .catch(err => console.log(err));
//     }
//   };

  render() {
    return (
      <Container>
        <button data-target="eventFormModal" className="btn modal-trigger">Post an Article</button>
        <Title 
          titleText="Latest News"
        />
        <CardOutline
					colSize={ "12" } 
					cardColor={ "" }
					cardTextColor={ "" }
				>
          <Row>
            <Col size="12">
                {/* <h1>Latest News</h1> */}
              {this.state.articles.length ? (
                <List>
                  {this.state.articles.map(article => (
                    <ListItem key={article._id}>
                      {/* <Link to={"/articles/" + article._id}>
                        <strong>
                          {article.title} by {article.author}
                        </strong>
                      </Link> */}
                      <NewsCard 
                        colSize={ "12" } 
                        cardTitle={ article.title }
                        cardSub={ article.author }
                        cardSub2={ moment( article.date).format("MM-DD-YYYY") }
                        cardText={ article.content }
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
        </CardOutline>
      </Container>
    );
  }
}

export default NewsFeed;
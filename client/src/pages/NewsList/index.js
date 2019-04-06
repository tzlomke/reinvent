import React, { Component } from "react";
import API from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import ArticleForm from "../../components/ArticleForm";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { NewsCard, CardOutline } from "../../components/NewsCard";
import moment from 'moment';
import { Title } from "../../components/Title";
import { StyleButton, StyleLink } from "../../components/StyleButton";

import "./style.css";

// import { Input, TextArea, FormBtn } from "../components/Form";

class NewsFeed extends Component {
  state = {
    articles: [],
    title: "",
    author: "",
    content: "",
    date: "",
    userId: "",
    userName: "",
    inputTitle: "",
    inputAuthor: "",
    inputContent: "",
  };

  loadUser = () => {
    let authenticatedUserId = this.props.auth.user.id
		API.getUserById(authenticatedUserId)
			.then(response => {
        let userData = response.data[0]
				this.setState({
          userId: userData._id,
          userName: `${userData.username}`,
          inputAuthor: `${userData.firstName} ${userData.lastName}`
				});
			});
  };
  
  loadFeed = () => {
    API.getArticles()
      .then(res =>
        {this.setState({ articles: res.data, title: "", author: "", content: "", date: "" })}
      )
      .catch(err => console.log(err));
  };

  componentDidMount () {
   this.loadUser();
   this.loadFeed();
   window.$('.modal').modal();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
  };

handleFormSubmit = event => {
  event.preventDefault();
  console.log("pressed")
  // const articleForm = document.getElementById('newArticle');
  if (this.state.inputTitle && this.state.inputAuthor) {
    API.saveArticle({
      title: this.state.inputTitle,
      author: this.state.inputAuthor,
      content: this.state.inputContent,
      userId: this.state.userId
    })
      .then(res => {
        this.loadFeed()
        this.setState({
          inputTitle: '',
          inputContent: ''
        });
      })
      .catch(err => console.log(err));
  }
  // articleForm.reset();
};

  render() {
    return (
      <Container>
        <StyleButton
          btnTxt="Post an Article +"
          dataTarget="articleFormModal"
          modal= {true}
        />
        <ArticleForm
          inputTitle={this.state.inputTitle}
          inputAuthor={this.state.inputAuthor}
          inputContent={this.state.inputContent}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}/>
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
              {this.state.articles.length ? (
                <List>
                  {this.state.articles.map(article => (
                    <ListItem key={article._id}>
                      <NewsCard 
                        colSize={ "12" } 
                        cardTitle={ article.title }
                        cardSub= { "by: " + article.author }
                        cardSub2={ moment( article.date).format("MM-DD-YYYY") }
                        cardText={ article.content }
                        cardTextColor={ "white-text" }
                        cardColor={ "blue-grey" }
                        cardAction={ 
                          <StyleLink
                          btnTxt="Read"
                          linkTo={"/articles/" + article._id}
                          />
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

// export default NewsFeed;

NewsFeed.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(NewsFeed);
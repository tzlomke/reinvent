import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import ArticleForm from "../../components/ArticleForm";
import moment from 'moment';
import DeleteBtn from "../../components/DeleteBtn";
import { CardOutline } from "../../components/NewsCard";
import { Title } from "../../components/Title";

import "./style.css";



class Detail extends Component {
  state = {
    article: {},
    inputTitle: "",
    inputAuthor: "",
    inputContent: "",
  };

  deleteArticle = (articleId) => {
    API.deleteArticle(articleId).then(window.location.assign("/news-feed"))
  };

  componentDidMount() {
    API.getArticle(this.props.match.params.id)
      .then(res => 
        this.setState({ 
          article: res.data, 
          inputTitle: res.data.title, 
          inputAuthor: res.data.author, 
          inputContent: res.data.content 
        }))
      .catch(err => console.log(err));
    window.$('.modal').modal();
  };

  render() {
    return (
      <Container>
        <button data-target="articleFormModal" className="btn modal-trigger">Edit this Article</button>
        <ArticleForm
          inputTitle={this.state.inputTitle}
          inputAuthor={this.state.inputAuthor}
          inputContent={this.state.inputContent}
          // handleFormSubmit={this.handleFormSubmit}
          // handleInputChange={this.handleInputChange}
          />
        <Title 
          titleText= {this.state.article.title}
        />
        <CardOutline
        colSize={ "12" } 
        cardColor={ "" }
        cardTextColor={ "" }
        >
          <DeleteBtn onClick={() => this.deleteArticle(this.state.article._id)} /> 
          <Row>
            <Col size="md-12">
              {/* <h1>
                {console.log(this.state.article.title)}
                {this.state.article.title}                 
              </h1> */}
              <h5>by: {this.state.article.author}</h5>
              <h6>Posted on: { moment(this.state.article.date).format("MM-DD-YYYY") }</h6>
            </Col>
          </Row>
          <Row>
            <Col size="md-10 md-offset-1">
              <article>
                <p className="preThis">
                  {this.state.article.content}
                </p>
              </article>
            </Col>
          </Row>
        </CardOutline>
        <Row>
            <Col size="md-2">
              <Link to="/News-Feed">← Back to Articles</Link>
            </Col>
          </Row>
      </Container>
    );
  }
}

export default Detail;

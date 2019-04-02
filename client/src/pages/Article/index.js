import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import moment from 'moment';
import DeleteBtn from "../../components/DeleteBtn";


class Detail extends Component {
  state = {
    article: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getArticle(this.props.match.params.id)
      .then(res => this.setState({ article: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
          <br></br>
          <DeleteBtn onClick={() => this.deleteArticle(this.state.article._id)} /> 
        <Row>
          <Col size="md-12">
            <h1>
              {console.log(this.state.article.title)}
              {this.state.article.title}                 
            </h1>
            <h3>By {this.state.article.author}</h3>
            <h6>Posted on: { moment(this.state.article.date).format("MM-DD-YYYY") }</h6>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <p>
                {this.state.article.content}
              </p>
            </article>
          </Col>
        </Row>
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

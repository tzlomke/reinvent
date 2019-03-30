import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import React from "../../components/ResourcesForm";

class NewsFeed extends Component {
    state = {
        resources: [],
        title: "",
        link: "",
        category: ""
    };

    componentDidMount = () => {
        this.loadResources();
    };

    loadResources = () => {
        API.getResources()
        .then(res =>
            {this.setState({ 
                Resources: res.data,
                title: "",
                author: "",
                synopsis: "" 
            })
            console.log(res.data)}
        )
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.link) {
            API.saveBook({
                title: this.state.title,
            author: this.state.author,
            synopsis: this.state.synopsis
        })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
        }
    };

    render() {
        return (
        <Container>
            <Row>
                <Col size="12">
                    <h1>Resources</h1>
                    {this.state.resources.length ? (
                        <List>
                            {this.state.resource.map(resource => (
                                <ListItem key={resource._id}>
                                    <Link to={"/articles/" + article._id}>
                                        <strong>
                                        {article.title} by {article.author}
                                        </strong>
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <h3>No Resources to Display</h3>
                    )}
                </Col>
            </Row>
        </Container>
        );
    }
}

export default NewsFeed;
import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import ResourceForm from "../../components/ResourcesForm";

class Resources extends Component {
    state = {
        resources: [],
        title: "",
        link: "",
        category: ""
    };

    componentDidMount = () => {
        this.loadResources();
        window.$('.modal').modal();
    };

    loadResources = () => {
        API.getResources()
        .then(res => {
            this.setState({ resources: res.data });
        })
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
            API.createResource({
                title: this.state.title,
                link: this.state.link
        })
        .then(res => {
            this.loadResources();
            this.setState({
                title: "",
                link: ""
            })
        })
        .catch(err => console.log(err));
        }
    };

    render() {
        return (
        <Container>
            <ResourceForm
            title={this.state.title}
            link={this.state.link}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            />
            <Row>
                <Col size="12">
                    <button data-target="resourceFormModal" className="btn modal-trigger">Add a Resource Link</button>
                    <h1>Resources</h1>
                    {this.state.resources.length ? (
                        <List>
                            {this.state.resources.map(resource => (
                                <ListItem key={resource._id}>
                                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                                        <strong>
                                        {resource.title}
                                        </strong>
                                    </a>
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

export default Resources;
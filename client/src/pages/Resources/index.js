import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import ResourceForm from "../../components/ResourcesForm";
import { Title, SubTitle } from "../../components/Title";
import DeleteBtn from "../../components/DeleteBtn";
import { CardOutline } from "../../components/NewsCard";



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

    deleteResource = (resourceId) => API.deleteResource(resourceId).then((this.loadResources()));
    
    render() {
        return (
        <Container>
            <button data-target="resourceFormModal" className="btn modal-trigger">Add a Resource Link</button>
            <Title 
                titleText="Resources"
            />
            <ResourceForm
            title={this.state.title}
            link={this.state.link}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            />
            <Row>
                <CardOutline
                colSize={ "12" } 
                cardColor={ "" }
                cardTextColor={ "" }
                >
                    {/* <h1>Resources</h1> */}
                    {this.state.resources.length ? (
                        <List>
                            {this.state.resources.map(resource => (
                                <ListItem key={resource._id}>
                                    <a href={resource.link}>
                                        <strong>
                                        {resource.title}
                                        </strong>
                                    </a>
                                    <DeleteBtn onClick={() => this.deleteResource(resource._id)}/>
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <h3>No Resources to Display</h3>
                    )}
                </CardOutline>
            </Row>
        </Container>
        );
    }
}

export default Resources;
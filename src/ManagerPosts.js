import React, { Component } from 'react'
import configApp from './configuracion'
import ListaPosts from './ListaPosts';

export default class ManagerPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    componentDidMount() {
        this.loadDataFromServer();
    }
    loadDataFromServer = () => {
        fetch(configApp.httpRequests.allPosts, { method: 'GET' }).then((response) => {
            console.log(response)
            return response.json();
        }).then((posts) => {
            console.log(posts);
            this.setState({ posts: posts });
        });
    }

    render() {
        return (
            <ListaPosts posts={this.state.posts} />
        );

    }
}
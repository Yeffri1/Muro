import React, { Component } from 'react'
import configApp from './configuracion'
import ListaPosts from './ListaPosts';


export default class ManagerPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            user: null,
            autorizado: true
        };
    }
    componentDidMount() {
        this.loadDataFromServer();
    }
    loadDataFromServer = () => {
        fetch(configApp.httpRequests.allPosts, { method: 'GET'}
        ).then((response) => {
                return response.json();
        }).then((posts) => {
            this.setState({ posts: posts });
        }).catch((err) => {
            console.log(err);
        });

    }
    render() {
        return (
            <ListaPosts posts={this.state.posts}

            />
        );

    }
}
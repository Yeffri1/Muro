import React, { Component } from 'react'
import Post from './Post'
export default class ListaPosts extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const posts = this.props.posts || [];
        let stylePost = { 'margin': '1%' };
        return (
            <div className="top-news" style={stylePost}>
                <div className="top-inner">
                    {/*   AQUI VAN LOS POSTS  */}
                    {
                        Object.keys(posts).map((k, i) => {
                            let data = posts[k];
                            return (
                                <Post key={k} post={data} />
                            );
                        })
                    }
                </div>
            </div>
        );


    }
}
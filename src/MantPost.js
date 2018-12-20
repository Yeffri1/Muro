import React, { Component } from 'react'
import configApp from './configuracion'

export default class MantPost extends Component {
    constructor(props) {
        super(props);
        this.state = { autorizado: false, post: '', titulo: '', redirect: false };
        this.verifyAuth = this.verifyAuth.bind(this);
        this.guardar = this.guardar.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.verifyAuth();
    }
    verifyAuth = () => {
        fetch(configApp.httpRequests.verificarAuth, { method: 'GET' }
        ).then((response) => {
            if (response.status == 401) {
                this.setState({ autorizado: false });
            } else {
                this.setState({ autorizado: true });
            }
        }).catch((err) => {
            console.log(err);
        });

    }
    guardar = (evt) => {
        let post = { post: this.state.post, titulo: this.state.titulo };
        fetch(configApp.httpRequests.registrarPost, { method: 'POST', mode: 'no-cors', headers: { 'content-Type': 'application/x-www-form-urlencoded' }, body: `titulo=${post.titulo}&post=${post.post}` }
        ).then((response) => {
            alert('agregado');
            console.log(response)

        }).catch((err) => {
            console.log(err);
            alert(err);

        });

    }
    handleChange(event) {
        let name = event.target.name;
        this.setState({ [name]: event.target.value });
    };


    render() {
        let stylePost = {
            'margin': '1%'
        };
      
        if (this.state.autorizado) {
            return (
                <div className="coment-form" style={stylePost}>
                    <h4>Leave your post</h4>
                    <form>
                        <input type="text" alue={this.state.titulo}  name='titulo' onChange={this.handleChange} placeholder='Title' />
                        <textarea name='post' value={this.state.post}  onChange={this.handleChange} placeholder='Your Comment...'></textarea>
                        <input type="hidden" name='Fecha' hidden value={new Date().getTime()} />
                        <input type="button" value="Submit Post" onClick={this.guardar} />
                    </form>

                </div>
            );
        }
        else {
            return (
                <div className="coment-form" style={stylePost}>
                    <h2>No Autorizado o se venció su sección</h2>
                </div>
            );
        }

    }

}
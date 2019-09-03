import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
constructor(props) {
    super(props);
    this.state = {
        hasError: false
    }
}

componentDidCatch(error, info) {
    this.setState({hasError: true})
}

    render() {
        if(this.state.hasError) {
            return  <h1 className="f1">Ooops. This is not good.</h1>
        } else {
            return this.props.children
        }
        
    }
}

import React, { Component } from 'react'

class Book extends Component {
  render() {
    return (
        <article>
        <h1>{this.props.params.id}</h1>
        </article>
    )
  }
}

export default Book
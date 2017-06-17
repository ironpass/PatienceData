import React, { Component } from 'react'
import { Link } from 'react-router';
import Header from './HeaderBar'
import styles from './Head.scss'

class Head extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <div className={styles['content']}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Head
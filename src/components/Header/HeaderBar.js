import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './HeaderBar.scss'

export default class HeaderBar extends Component {
  render() {
    return (
      <header className={styles['header']}>
        <nav>
          <Link
            to={{ pathname: '/' }}
            className={styles['brand']}>
            Library
          </Link>
          <text>Guest</text>
          <ul className={styles['menu']}>
            <li className={styles['menu__item']}>
              <Link
                to={{ pathname: '/app' }}
                className={styles['menu__link']}>
                All pages
              </Link>
            </li>
            <li className={styles['menu__item']}>
              <a
                href='#'
                className={styles['menu__link']}>
                About us
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
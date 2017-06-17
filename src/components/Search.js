import React, { Component, PropTypes } from 'react';
import styles from './Search.scss'
import axios from 'axios'
import $ from 'JQuery';

export default class Search extends Component{
  createTable (){
    axios.post('http://localhost:3943/', {
      firstName: this.props.value,
      lastName: 'Flintstone'
    }).then(res => res.data).then((data) => {
      var columns = [];
      var headerTr$ = $('<tr/>');
  
      for (var i = 0 ; i < data.length ; i++) {
          var rowHash = data[i];
          for (var key in rowHash) {
              if ($.inArray(key, columns) == -1){
                  columns.push(key);
                  headerTr$.append($('<th/>').html(key));
              }
          }
      }
      $("#excelDataTable").append(headerTr$);

      for (var i = 0 ; i < data.length ; i++) {
          var row$ = $('<tr/>');
          for (var colIndex = 0 ; colIndex < columns.length ; colIndex++) {
              var cellValue = data[i][columns[colIndex]];
  
              if (cellValue == null) { cellValue = ""; }
  
              row$.append($('<td/>').html(cellValue));
          }
          $("#excelDataTable").append(row$);
      }
    })
  }
  // componentWillMount() {
  // }
  render() {
      return (
      <div>
        <button onClick={(e) => this.createTable(e)}>Search</button>
        <table id="excelDataTable" className={styles['table']}>
        </table>
      </div>
      )
  }
}
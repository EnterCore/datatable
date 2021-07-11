import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Table.module.scss';


function Table () {
  const list = useSelector(state => state.usersList.list);
  const renderTable = () => { 
    return list.map((currUser) => (
      <tr>
        <td><img className={styles.avatar} src={`/assets/images/${currUser.image}.svg`} alt="" align="middle"/>{currUser.name}</td>
        <td>{currUser.age}</td>
        <td>{currUser.phone}</td>
        <td>{currUser.favourite}2</td>
      </tr>
    ));
  }
  return (
    <table cellPadding={10} className={styles.tableList}>
      <tbody>
        {renderTable()}
      </tbody>
    </table>
  )
}


export default Table;











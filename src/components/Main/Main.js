import React, { useState } from 'react';

import Table from 'components/Table/Table';
import Preview from 'components/Preview/Preview';
import styles from './Main.module.scss';
import USERS_LIST_VIEWS from 'constants/UsersListViews';
import Sorting from 'components/Sorting/Sorting';

function Main() {
  const [listView, setListView] = useState(USERS_LIST_VIEWS.table);

  const changeListView = (ev) => {
    const value = ev.target.value;

    setListView(value);
  }

  return (
    <div className={styles.main}>
      <div className={styles.controlsTop} >
        <input className={styles.searchBar}
          type="search"
          placeholder={'Search by name and/or surname'}
          // onChange={}
        />
        <div className={styles.langBtns}>
          <button className={styles.langBtn}>EN</button>
          <button className={styles.langBtn}>RU</button>
        </div>
      </div>
      <div className={styles.controlsButtom}>
        <div className={styles.view}>
          <p>View:</p>
          <button
            value={USERS_LIST_VIEWS.table}
            className={styles.controlBtn}
            onClick={ev => changeListView(ev)}
          >
            Table
          </button>
          <button
            value={USERS_LIST_VIEWS.preview}
            className={styles.controlBtn}
            onClick={ev => changeListView(ev)}
          >
            Preview
          </button>
        </div>
        <div>

          <div className={styles.sortingBtn}>
            <Sorting /> 
          </div>
        </div>
      </div>
      
      {listView === USERS_LIST_VIEWS.preview
        ? <Preview /> 
        : <Table />
      }
    </div>
    
  )
  
}


export default Main;
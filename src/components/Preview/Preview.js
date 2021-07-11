import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Preview.module.scss';


function Preview () {
  const list = useSelector(state => state.usersList.list);
  
  const renderTable = () => { 
    return list.map((currUser) => (
      <div className={styles.Preview}>
        <div className={styles.userCard}>
          <div className={styles.userInfo}>
            <div >
              <img  className={styles.userImg} src={`/assets/images/${currUser.image}.svg`} alt="" align="middle"/>
              {currUser.name}
            </div>
            <div>
              {currUser.favourite}1
            </div> 
          </div>
          <div className={styles.cardBody}>
            {currUser.age} years <br/>
            {currUser.phone}
          </div>
          <div>
            {currUser.phrase}
          </div>
        </div>
        {currUser.video === undefined
          ?  <></>
          :  <div className={styles.videoPlayer}>
                <video controls >
                  <source src={`/assets/videos/${currUser.video}.mp4`} type="video/mp4"/>
                </video>
              </div>     
        }
    </div>
    ));
  }
  return (
    <div>
      {renderTable()}
    </div>
    
  )
}


export default Preview;











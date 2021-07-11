import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getUsersList, getUsersListSuccess, getUsersListFailure } from 'action/userListAction';
import getUrlParams from 'utils/getUrl';
import Main from 'components/Main/Main';




export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUsersList();
  }, []);



  const fetchUsersList = () => {
    dispatch(getUsersList())

    fetch('/assets/data.json')
      .then(response => response.json())
      .then(result => {
        const queries = getUrlParams(window.location.search)
        const isReversed = queries.is_reversed === 'true';
        dispatch(getUsersListSuccess(result))
          
      });
  }

  
  

  return (
    <>
      <Main />
    </>
  )
}


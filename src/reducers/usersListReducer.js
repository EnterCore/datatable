import * as actions from 'action/userListAction';
import Sorting from 'components/Sorting/Sorting';
import SORTING_TYPES from 'constants/SortingTypes';

const intialState = {
  loading: false,
  hasErrors: false,
  list: [],
  sortingType: SORTING_TYPES.id,
  isReversed: false
}

const usersListReducer = (state = intialState, action) => {
  switch (action.type) {
    case actions.GET_USERS_LIST:
      return {
        ...state,
        loading: true
      };
    case actions.GET_USERS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        hasErrors: false,
        list: action.payload
      }; 
    case actions.GET_USERS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true
      };
    case actions.SORT_USERS_LIST:
      return {
        ...state,
        loading: false,
        list: action.payload.list,
        sortingType: action.payload.sortingType
        // isReversed: action.payload
      }  

    default:
      return state; 
    
  }

}

export default usersListReducer;
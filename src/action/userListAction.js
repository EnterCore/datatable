import { compareNum, compareStr } from "utils/sortingMetods";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USERS_LIST_SUCCESS = "GET_USERS_LIST_SUCCESS";
export const GET_USERS_LIST_FAILURE = "GET_USERS_LIST_FAILURE";
export const SORT_USERS_LIST = "SORT_USERS_LIST";

export const getUsersList = () => ({
  type: GET_USERS_LIST,
});
export const getUsersListSuccess = (list) => ({
  type: GET_USERS_LIST_SUCCESS,
  payload: list,
});
export const getUsersListFailure = () => ({
  type: GET_USERS_LIST_FAILURE,
});

export const updateFavourite = (userId, usersList) => {};

export const sortUsersList = ({
  usersList,
  type,
  isReversed,
  isSortingValueStr
}) => {
  const usersListClone = JSON.parse(JSON.stringify(usersList));

  usersListClone.sort((a, b) =>
    isSortingValueStr
      ? compareStr(a[type], b[type])
      : compareNum(a[type], b[type])
  );

  if (isReversed) {
    usersListClone.reverse();
  }

  return {
    type: SORT_USERS_LIST,
    payload: { list: usersListClone, sortingType: type }
  }
};

// export reverseUsersList

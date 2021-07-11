import React, { useState } from "react";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Sorting.module.scss";
import SORTING_TYPES from "constants/SortingTypes";
import { sortUsersList } from "action/userListAction";

function Sorting() {
  const [isDropdownOpened, toggleDropdown] = useState(false);

  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.usersList.list);
  const sortingType = useSelector((state) => state.usersList.sortingType);
  const isReversed = useSelector((state) => state.usersList.isReversed);

  const sortBy = (params) => {
    dispatch(sortUsersList(params));
  };

  return (
    <div>
      <p>Sorting:</p>
      <div className={styles.sorting}>
        <div
          className={cx(styles.select, {
            [styles.selectOpened]: isDropdownOpened,
          })}
          onClick={() => toggleDropdown(!isDropdownOpened)}
        >
          <span>{sortingType === SORTING_TYPES.id ? "ID" : sortingType}</span>
          <ul className={styles.dropList}>
            <li
              onClick={() =>
                sortBy({ usersList, type: SORTING_TYPES.id, isReversed })
              }
            >
              Id
            </li>
            <li
              onClick={() =>
                sortBy({
                  usersList,
                  type: SORTING_TYPES.name,
                  isReversed,
                  isSortingValueStr: true
                })
              }
            >
              Name
            </li>
            <li
              onClick={() =>
                sortBy({ usersList, type: SORTING_TYPES.age, isReversed })
              }
            >
              Age
            </li>
          </ul>
        </div>
        <button className={styles.controlBtn}>Ascending</button>
        <button className={styles.controlBtn}>Descending</button>
      </div>
    </div>
  );
}

export default Sorting;

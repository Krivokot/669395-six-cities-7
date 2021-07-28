import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sortOffers } from '../../store/action';
import { SortTypes } from '../../const';
import PropTypes from 'prop-types';
import { getSortType } from '../../store/view-settings/selectors';

function Sort(props) {
  const { onSortOffers, sortType } = props;
  const [activeFlag, setActive] = useState(false);

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by</span>
      <span
        className='places__sorting-type'
        tabIndex='0'
        onClick={() => {
          setActive(!activeFlag);
        }}
      >
        {sortType}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <ul
        className={
          activeFlag
            ? 'places__options places__options--custom places__options--opened'
            : 'places__options places__options--custom places__options'
        }
      >
        <li
          className={
            sortType === SortTypes.POPULAR
              ? 'places__option places__option--active'
              : 'places__option'
          }
          tabIndex='0'
          onClick={() => {
            onSortOffers(SortTypes.POPULAR);
            setActive(!activeFlag);
          }}
        >
          Popular
        </li>
        <li
          className={
            sortType === SortTypes.LOW_PRICE
              ? 'places__option places__option--active'
              : 'places__option'
          }
          tabIndex='0'
          onClick={() => {
            onSortOffers(SortTypes.LOW_PRICE);
            setActive(!activeFlag);
          }}
        >
          Price: low to high
        </li>
        <li
          className={
            sortType === SortTypes.HIGH_PRICE
              ? 'places__option places__option--active'
              : 'places__option'
          }
          tabIndex='0'
          onClick={() => {
            onSortOffers(SortTypes.HIGH_PRICE);
            setActive(!activeFlag);
          }}
        >
          Price: high to low
        </li>
        <li
          className={
            sortType === SortTypes.TOP_RATED
              ? 'places__option places__option--active'
              : 'places__option'
          }
          tabIndex='0'
          onClick={() => {
            onSortOffers(SortTypes.TOP_RATED);
            setActive(!activeFlag);
          }}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
}

Sort.propTypes = {
  onSortOffers: PropTypes.func.isRequired,
  sortType: PropTypes.string,
};

const mapStateToProps = (state) => ({
  sortType: getSortType(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSortOffers(sort) {
    dispatch(sortOffers(sort));
  },
});

export { Sort };
export default connect(mapStateToProps, mapDispatchToProps)(Sort);

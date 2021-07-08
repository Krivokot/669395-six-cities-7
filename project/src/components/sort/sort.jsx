import React, {useState} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {SortTypes} from '../../const';
import PropTypes from 'prop-types';

function Sort(props) {
  const {onSortOffers} = props;
  const [activeFlag, setActive] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={() => {
        setActive(!activeFlag);}}
      >
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className= {activeFlag ? 'places__options places__options--custom places__options--opened' : 'places__options places__options--custom places__options'}>
        <li className="places__option places__option--active" tabIndex="0" onClick={() => onSortOffers(SortTypes.POPULAR)}>Popular</li>
        <li className="places__option" tabIndex="0" onClick={() => onSortOffers(SortTypes.LOW_PRICE)}>Price: low to high</li>
        <li className="places__option" tabIndex="0" onClick={() => onSortOffers(SortTypes.HIGH_PRICE)}>Price: high to low</li>
        <li className="places__option" tabIndex="0" onClick={() => onSortOffers(SortTypes.TOP_RATED)}>Top rated first</li>
      </ul>
    </form>
  );
}

Sort.propTypes = {
  onSortOffers: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSortOffers(sort) {
    dispatch(ActionCreator.sortOffers(sort));
  },
});

export {Sort};
export default connect(null, mapDispatchToProps)(Sort);

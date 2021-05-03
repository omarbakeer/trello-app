import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddList.style.css';

const AddList = ({ hasAtLeastOneList }) => {
  const [isUserCurrentlyAddingAList, setIsUserCurrentlyAddingAList] = useState(false);

  if (!isUserCurrentlyAddingAList)
    return <div className="add-list__label">+ Add {hasAtLeastOneList ? 'another': 'a'} list</div>;
  return (
    <div className="add-list__wrapper">
        {/* TODO list input */}
      <div className="add-list__actions-wrapper">
        {/* TODO Add list button */}
        {/* TODO cancel button */}
      </div>
    </div>
  )
};

AddList.propTypes = {
  hasAtLeastOneList: PropTypes.bool,
}

AddList.defaultProps = {
  hasAtLeastOneList: false,
}

export default AddList;

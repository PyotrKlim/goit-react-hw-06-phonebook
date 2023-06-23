import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slice';

export const ContactsItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <li>
        {name}: {number}
        <button type="button" onClick={onClick}>
          Delete
        </button>
      </li>
    </>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

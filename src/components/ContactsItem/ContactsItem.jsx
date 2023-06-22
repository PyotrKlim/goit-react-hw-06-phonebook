import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

export const ContactsItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch({
      type: 'contacts/DeleteContact',
      payload: id,
    });
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

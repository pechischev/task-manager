import PropTypes from 'prop-types';

export const propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  title: PropTypes.string.isRequired,
  onAppend: PropTypes.func,
  onChangeTitle: PropTypes.func,
};

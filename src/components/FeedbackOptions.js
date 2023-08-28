import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Options, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, addVoice }) => {
  return (
    <Options>
      {options.map(option => (
        <Button onClick={() => addVoice(option)} key={nanoid()}>
          {option}
        </Button>
      ))}
    </Options>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.number),
  addVoice: PropTypes.func.isRequired,
};

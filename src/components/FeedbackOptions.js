import { Options, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, addVoice }) => {
  return (
    <Options>
      {options.map(option => (
        <Button onClick={() => addVoice(option)} key={option}>
          {option}
        </Button>
      ))}
    </Options>
  );
};

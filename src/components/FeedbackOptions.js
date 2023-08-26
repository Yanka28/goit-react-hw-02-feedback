import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options, addVoice }) => {
  return (
    <div>
      {options.map(option => (
        <button onClick={() => addVoice(option)} key={nanoid()}>
          {option}
        </button>
      ))}
    </div>
  );
};

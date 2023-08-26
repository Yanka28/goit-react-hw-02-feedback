import { nanoid } from 'nanoid';

export const Statistics = ({ values, total, percentage }) => (
  <ul>
    <li key={nanoid()}>Good:{values[0]}</li>
    <li key={nanoid()}>Neutral:{values[1]}</li>
    <li key={nanoid()}>Bad:{values[2]}</li>
    <li key={nanoid()}>Total:{total(values)}</li>
    <li key={nanoid()}>Positiv feedback: {percentage(values)}%</li>
  </ul>
);

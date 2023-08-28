import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { List, ListItem } from './Statistics.styled';

export const Statistics = ({ values, total, percentage }) => (
  <List>
    <ListItem key={nanoid()}>Good:{values[0]}</ListItem>
    <ListItem key={nanoid()}>Neutral:{values[1]}</ListItem>
    <ListItem key={nanoid()}>Bad:{values[2]}</ListItem>
    <ListItem key={nanoid()}>Total:{total(values)}</ListItem>
    <ListItem key={nanoid()}>Positiv feedback: {percentage(values)}%</ListItem>
  </List>
);

Statistics.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number),
  total: PropTypes.number,
  percentage: PropTypes.number,
};

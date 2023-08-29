import { List, ListItem } from './Statistics.styled';

export const Statistics = ({ values, total, percentage }) => (
  <List>
    <ListItem>Good:{values[0]}</ListItem>
    <ListItem>Neutral:{values[1]}</ListItem>
    <ListItem>Bad:{values[2]}</ListItem>
    <ListItem>Total:{total(values)}</ListItem>
    <ListItem>Positiv feedback: {percentage(values)}%</ListItem>
  </List>
);

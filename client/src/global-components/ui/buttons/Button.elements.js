import { Link } from 'react-router-dom';

const getButtonElement = (toProp, hrefProp) => {
  if (toProp) return Link;
  if (hrefProp) return 'a';
  return 'button';
};

export default getButtonElement;

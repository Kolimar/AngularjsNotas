import template from './nform.html';
import controller from './nform.controller';
import './nform.scss';

let nformComponent = {
  bindings: {
    event:'@',
    onSave: '&'
  },
  template,
  controller
};

export default nformComponent;

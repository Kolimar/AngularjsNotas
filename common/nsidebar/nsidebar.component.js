import template from './nsidebar.template.html';
import controller from './nsidebar.controller';
import './nsidebar.scss';

const nsidebarComponent = {
  template,
  controller,
  bindings: {
    action: '@',
    btnText: '@',
    eventtrigger: '@',
    title:'@',
    onSave:'&'
  }
};

export default nsidebarComponent;

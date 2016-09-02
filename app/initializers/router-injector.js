export function initialize(application) {
  application.inject('component', 'router', 'router:main');
  application.inject('controller', 'router', 'router:main');
}

export default {
  name: 'router-injector',
  initialize: initialize
};

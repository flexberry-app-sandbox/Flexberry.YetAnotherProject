import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-yet-another-project-yet-another-class-l');
  this.route('i-i-s-yet-another-project-yet-another-class-e',
  { path: 'i-i-s-yet-another-project-yet-another-class-e/:id' });
  this.route('i-i-s-yet-another-project-yet-another-class-e.new',
  { path: 'i-i-s-yet-another-project-yet-another-class-e/new' });
});

export default Router;

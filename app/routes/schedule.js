import Route from '@ember/routing/route';

export default class ScheduleRoute extends Route {
  queryParams = [{ showFilters: { as: 'show_filters' } }];

  model({ showFilters }) {
    console.log('Schedule model is being called');
  }
}

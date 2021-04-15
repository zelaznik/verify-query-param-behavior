import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ScheduleController extends Controller {
  queryParams = ['showFilters'];
  @tracked showFilters = false;

  @action
  setFilters(value) {
    this.showFilters = !!value;
  }
}

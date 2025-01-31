import Component from '@glimmer/component';
// @ts-expect-error - no types for package(?)
import podNames from 'ember-component-css/pod-names';

export default class MovieListSearchInput extends Component {
  styleNamespace = podNames['movie-list-search-input'];
}

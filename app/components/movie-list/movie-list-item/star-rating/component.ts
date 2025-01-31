import Component from '@glimmer/component';
// @ts-expect-error - no types for package(?)
import podNames from 'ember-component-css/pod-names';

interface StarRatingSignature {
  Args: {
    rating: number;
  };
  Blocks: {};
  Element: HTMLLIElement;
}

export default class StarRating extends Component<StarRatingSignature> {
  styleNamespace = podNames['movie-list/movie-list-item/star-rating'];
  get rangeInt() {
    const r = [];
    for (let i = 1; i <= this.args.rating; i++) {
      r.push(i);
    }
    return r;
  }
  get withHalfStar() {
    return !Number.isInteger(this.args.rating);
  }
}

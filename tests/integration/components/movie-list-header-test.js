import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | movie-list-header', function (hooks) {
  setupRenderingTest(hooks);

  test('has the correct header text', async function (assert) {
    await render(hbs`<MovieListHeader />`);

    assert.dom('h1').hasText('Movies');
  });
});

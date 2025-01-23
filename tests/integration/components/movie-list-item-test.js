import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | MovieListHeader', function (hooks) {
  setupRenderingTest(hooks);

  test('has the correct header text', async function (assert) {
    this.movie = { title: 'TEST TITLE', description: 'TEST DESCRIPTION' };
    await render(hbs`<MovieList::MovieListItem />`);

    assert.dom('h2').hasText('TEST TITLE');
    assert.dom('p').hasText('TEST DESCRIPTION');
  });
});

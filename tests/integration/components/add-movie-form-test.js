import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | AddMovieForm', function (hooks) {
  setupRenderingTest(hooks);

  test('it contains the right elements', async function (assert) {
    await render(hbs`<AddMovieForm />`);

    assert.dom('label').exists({ count: 2 });
    assert.dom('input').exists({ count: 2 });
    assert.dom('button').exists({ count: 1 });
    assert
      .dom('[data-test-description-label]')
      .exists()
      .containsText('Description');
    assert.dom('button').hasText('Add Movie');
    assert.dom('.error-message').doesNotExist();
  });

  test('it adds a movie and clears the input fields on successful submission', async function (assert) {
    const firebaseService = this.owner.lookup('service:firebase');

    this.loadMovies = () => {
      assert.ok(true, 'loadMovies was called');
    };

    firebaseService.addMovie = (title, description) => {
      assert.deepEqual(
        title,
        'Inception',
        'addMovie was called with the correct title',
      );
      assert.strictEqual(
        description,
        'A mind-bending thriller',
        'addMovie was called with the correct description',
      );
      assert.ok(true, 'addMovie was called');
    };

    await render(hbs`<AddMovieForm @loadMovies={{this.loadMovies}} />`);

    await fillIn('.form-title', 'Inception');
    await fillIn('.form-description', 'A mind-bending thriller');

    await click('button');

    assert
      .dom('.form-title')
      .hasValue('', 'Title input is cleared after submission');
    assert
      .dom('.form-description')
      .hasValue('', 'Description input is cleared after submission');
    assert
      .dom('.error-message')
      .doesNotExist('No error message is displayed on successful submission');
  });

  test('it displays an error message on failed submission', async function (assert) {
    const firebaseService = this.owner.lookup('service:firebase');

    this.loadMovies = () => {
      assert.ok(true);
    };

    firebaseService.addMovie = (title, description) => {
      assert.deepEqual(title, 'Inception');
      assert.strictEqual(description, 'A mind-bending thriller');
      assert.ok(true, 'addMovie was called');

      throw new Error('Failed to add movie');
    };

    await render(hbs`<AddMovieForm @loadMovies={{this.loadMovies}} />`);

    await fillIn('.form-title', 'Inception');
    await fillIn('.form-description', 'A mind-bending thriller');
    await click('button');

    assert.dom('.error-message').exists();
    assert.dom('.error-message').hasText('Failed to add movie');
  });
});

import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISYetAnotherProjectYetAnotherClassLForm from './forms/i-i-s-yet-another-project-yet-another-class-l';
import IISYetAnotherProjectYetAnotherClassEForm from './forms/i-i-s-yet-another-project-yet-another-class-e';
import IISYetAnotherProjectYetAnotherClassModel from './models/i-i-s-yet-another-project-yet-another-class';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-yet-another-project-yet-another-class': IISYetAnotherProjectYetAnotherClassModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'yet-another-project': {
          caption: 'yet-another-project',
          title: 'yet-another-project',
          'i-i-s-yet-another-project-yet-another-class-l': {
            caption: 'i-i-s-yet-another-project-yet-another-class-l',
            title: 'i-i-s-yet-another-project-yet-another-class-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-yet-another-project-yet-another-class-l': IISYetAnotherProjectYetAnotherClassLForm,
    'i-i-s-yet-another-project-yet-another-class-e': IISYetAnotherProjectYetAnotherClassEForm
  },

});

export default translations;

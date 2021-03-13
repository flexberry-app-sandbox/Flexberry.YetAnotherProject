import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  yetAnotherAttribute: DS.attr('string')
});

export let ValidationRules = {
  yetAnotherAttribute: {
    descriptionKey: 'models.i-i-s-yet-another-project-yet-another-class.validations.yetAnotherAttribute.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('YetAnotherClassE', 'i-i-s-yet-another-project-yet-another-class', {
    yetAnotherAttribute: attr('Yet another attribute', { index: 0 })
  });

  modelClass.defineProjection('YetAnotherClassL', 'i-i-s-yet-another-project-yet-another-class', {
    yetAnotherAttribute: attr('Yet another attribute', { index: 0 })
  });
};

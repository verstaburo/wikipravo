import $ from 'jquery';
import {VerstaSelectBox} from '../blocks/selectbox/selectbox';
import {advancedSearchOpened} from '../blocks/searchform/searchform';
import ReviewsSlider from '../blocks/slider/slider';

$(() => {

  // Финальный вызов функций
  VerstaSelectBox();
  advancedSearchOpened();
  ReviewsSlider();
});

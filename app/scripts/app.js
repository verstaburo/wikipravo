import $ from 'jquery';
import {VerstaSelectBox} from '../blocks/selectbox/selectbox';
import {VerstaPopups} from '../components/popups/popups';
import {VerstaTabs} from '../blocks/verstatabs/verstatabs';
import {advancedSearchOpened} from '../blocks/searchform/searchform';
import ReviewsSlider from '../blocks/slider/slider';

$(() => {

  // Финальный вызов функций
  VerstaSelectBox();
  VerstaPopups();
  VerstaTabs();
  advancedSearchOpened();
  ReviewsSlider();
});

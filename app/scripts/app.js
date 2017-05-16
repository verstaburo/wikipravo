import $ from 'jquery';
import {VerstaSelectBox} from '../blocks/selectbox/selectbox';
import {VerstaPopups} from '../components/popups/popups';
import {VerstaTabs} from '../blocks/verstatabs/verstatabs';
import {advancedSearchOpened} from '../blocks/searchform/searchform';
import ReviewsSlider from '../blocks/slider/slider';
import {NoteButtonSwitch} from '../blocks/action-controls/action-controls';
import {ScrollBar} from '../blocks/scrollbar/scrollbar';

$(() => {

  // Финальный вызов функций
  VerstaSelectBox();
  VerstaPopups();
  VerstaTabs();
  advancedSearchOpened();
  ReviewsSlider();
  NoteButtonSwitch();
  ScrollBar();

});

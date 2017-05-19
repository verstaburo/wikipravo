import $ from 'jquery';
import {VerstaSelectBox} from '../blocks/selectbox/selectbox';
import {VerstaPopups} from '../components/popups/popups';
import {VerstaTabs} from '../blocks/verstatabs/verstatabs';
import {VerstaToggle} from '../blocks/verstatoggle/verstatoggle';
import {advancedSearchOpened} from '../blocks/searchform/searchform';
import ReviewsSlider from '../blocks/slider/slider';
import {NoteButtonSwitch} from '../blocks/action-controls/action-controls';
import {ScrollBar} from '../blocks/scrollbar/scrollbar';
import {NoteTextareaFocus} from '../blocks/note/note';
import {FilterOpened} from '../blocks/filter-controls/filter-controls';
import {LocationPopup} from '../components/popup-location/popup-location';
import {FilterReset} from '../blocks/filter-controls/filter-controls';

$(() => {

  // Финальный вызов функций
  VerstaSelectBox();
  VerstaPopups();
  VerstaTabs();
  VerstaToggle();
  advancedSearchOpened();
  ReviewsSlider();
  NoteButtonSwitch();
  ScrollBar();
  NoteTextareaFocus();
  FilterOpened();
  LocationPopup();
  FilterReset();

});

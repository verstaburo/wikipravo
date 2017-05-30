import 'babel-polyfill';
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
import {FileListControl} from '../blocks/file-input/file-input';
import {FavoritesSwitch} from '../blocks/action-controls/action-controls';
import {JuristColorChange} from '../components/system-regform/system-regform';
import {ViewPassword} from '../blocks/input-password/input-password';
import {AvatarLoad} from '../blocks/avatar-browse/avatar-browse';
import {CandidateAddEmulation} from '../components/order-candidate/order-candidate';
import {ProfileActivation} from '../blocks/header-profile/header-profile';
import {specs} from '../components/specs/specs';

$(function () {

  // Финальный вызов функций
  svg4everybody();
  JuristColorChange();
  ViewPassword();
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
  FileListControl();
  FavoritesSwitch();
  AvatarLoad();
  CandidateAddEmulation();
  ProfileActivation();
  specs();
});

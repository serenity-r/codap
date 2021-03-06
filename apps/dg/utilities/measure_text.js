// ==========================================================================
//  
//  Author:   jsandoe
//
//  Copyright (c) 2016 by The Concord Consortium, Inc. All rights reserved.
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
// ==========================================================================
/**
 * A utility to measure the width of text.
 *
 * @param text {string} this text to measure
 * @param iStyle {object} font attributes if not default
 */
DG.measureTextWidth = function (text, iStyle) {
  var kSelector = 'dg-text-measurer';
  var style = {'font': 'initial'};
  if (iStyle) {
    style = iStyle;
  }
  var $el = $('.' + kSelector);
  if ($el.length === 0) {
    $el = $('<div>').addClass(kSelector);
    $el.appendTo(document.body);
  }
  $el.attr(style).text(text);
  return $el.width();
};
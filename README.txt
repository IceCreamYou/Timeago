================
  INSTALLATION
================

Download jquery.timeago.js from http://timeago.yarp.com/jquery.timeago.js and
put it in the timeago module folder. For example, if you put the timeago module
folder in sites/all/modules, then the timeago plugin should exist at
sites/all/modules/timeago/jquery.timeago.js.


============
  OVERVIEW
============

This module uses the jQuery timeago plugin to create dynamically updating
"time ago" dates. That is, the plugin turns static dates like
"October 10, 2011" into "10 minutes ago" and updates the time ago every minute.
This allows you to include "time ago" dates in cached content for most users
while degrading gracefully for users with JavaScript disabled. For more
information and examples, visit the jQuery plugin's homepage at
http://timeago.yarp.com/


============
  FEATURES
============

 - An option to turn node created times into timeago dates
 - An option to turn comment created/changed times into timeago dates
 - Tokens for node created time and comment created/changed times
 - An option to use the new HTML5 "time" element, abbr, or span
 - An API to turn any UNIX timestamp into a timeago date


=======
  API
=======

If you want to manually construct a Timeago date, you can do so by creating
a timeago-compatible HTML element like below and adding the Timeago JavaScript
to the page by calling timeago_add_js();

  <abbr class="timeago" title="2008-07-17T09:24:17Z">July 17, 2008</abbr>
  <span class="timeago" title="2008-07-17T09:24:17Z">July 17, 2008</span>
  <time class="timeago" datetime="2008-07-17T09:24:17Z">July 17, 2008</time>

The <time> tag is new in HTML5. The markup above will be turned into something
like this:

  <abbr class="timeago" title="July 17, 2008">3 years ago</abbr>

The timestamp in the title/datetime attribute is what the Timeago plugin uses
to calculate the time ago. It must be in ISO-8601 format. The easiest way to
get a date in that format is to call format_date($timestamp, 'custom', 'c');

If you don't want to go to the trouble of constructing the markup on your own,
this module provides an easier way: timeago_format_date().

/**
 * Converts a timestamp into a Timeago date.
 *
 * @param $timestamp
 *   A UNIX timestamp.
 * @param $date
 *   (Optional) A human-readable date (will be displayed if JS is disabled).
 *   If not provided, the site default date format is used.
 * @return
 *   HTML representing a Timeago-friendly date.
 */
function timeago_format_date($timestamp, $date = NULL)


===============
  TRANSLATION
===============

This module produces strings like "a moment ago" and "10 minutes ago" using
JavaScript, and these strings are passed through Drupal.t(), so they are
translate-able for most languages. However, some languages (Arabic, Polish,
Russian, Ukranian, etc.) have different suffixes depending on the numbers used.
If you need support for these languages, you can override the settings Timeago
uses in JavaScript by providing a translation override file. Examples of such
files are available at https://gist.github.com/6251 for various languages. You
should choose a translation or write your own and save it in a file named
jquery.timeago.LANGCODE.js, where LANGCODE is a language identifier code like
ar, pl, ru, or uk (for Arabic, Polish, Russian, and Ukranian, respectively).
This translation file should be placed in the module's folder, e.g. at
/sites/all/modules/timeago/jquery.timeago.ru.js for Russian. The appropriate
translation override file will be automatically added to the page if necessary.


==========
  AUTHOR
==========

This module was written by Isaac Sukin (IceCreamYou).
https://drupal.org/user/201425

The jQuery Timeago plugin was written by Ryan McGeary (rmm5t).
http://ryan.mcgeary.org/

The Drupal project is located at https://drupal.org/project/timeago

The jQuery plugin is located at http://timeago.yarp.com/
and developed at https://github.com/rmm5t/jquery-timeago

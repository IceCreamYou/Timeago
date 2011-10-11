Drupal.behaviors.timeago = {
  attach: function (context) {
    jQuery('abbr.timeago, span.timeago, time.timeago', context).timeago();
  }
}

/**
 * This allows translating string suffixes. Some languages (Arabic, Polish,
 * Russian, Ukranian, etc.) have different suffixes depending on the numbers
 * used; unfortunately we don't support those languages natively because as far
 * as I can tell Drupal doesn't have a good way to handle this kind of thing.
 * However, if you need support for these languages, you can override the
 * settings Timeago uses; see https://gist.github.com/6251 for details.
 */
jQuery.timeago.settings.strings = {
  prefixAgo: null,
  prefixFromNow: null,
  suffixAgo: Drupal.t("ago"),
  suffixFromNow: Drupal.t("from now"),
  seconds: Drupal.t("a moment"), // default is "less than a minute"
  minute: Drupal.t("about a minute"),
  minutes: Drupal.t("%d minutes"),
  hour: Drupal.t("about an hour"),
  hours: Drupal.t("about %d hours"),
  day: Drupal.t("a day"),
  days: Drupal.t("%d days"),
  month: Drupal.t("about a month"),
  months: Drupal.t("%d months"),
  year: Drupal.t("about a year"),
  years: Drupal.t("%d years"),
}

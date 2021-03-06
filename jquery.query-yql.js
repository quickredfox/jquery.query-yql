/*!
 * jQuery Plugin: Query YQL - version 0.2
 * http://github.com/hail2u/jquery.query-yql
 * Query YQL simply.
 *
 * Copyright (c) 2009 Kyo Nagashima <kyo@hail2u.net>
 * This library licensed under MIT license:
 * http://opensource.org/licenses/mit-license.php
 */
(function ($) {
  $.queryYQL = function (statement, type, callback) {
    if ($.isFunction(type)) {
      callback = type;
      type = "json";
    }

    var url = "http://query.yahooapis.com/v1/public/yql?callback=?";
    var data = {
      format: type,
      q:      statement
    };

    return $.get(url, data, callback, "json");
  };
})(jQuery);

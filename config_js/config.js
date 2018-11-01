/*
 * textConnect Plug-in
 * Copyright (c) 2016 Cybozu
 *
 * Licensed under the MIT License
 */
jQuery.noConflict();
(function($, PLUGIN_ID) {
    'use strict';

    $('#submit').click(function() {
      var apitoken = $('#apitoken').val();
      var headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apitoken
      };
      console.log(headers);
      kintone.plugin.app.setProxyConfig('https://slack.com/api/chat.postMessage', "POST", headers, {});
    })

    $('#cancel').click(function() {
      history.back()
    });

})(jQuery, kintone.$PLUGIN_ID);

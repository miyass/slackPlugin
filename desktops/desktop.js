(function(PLUGIN_ID) {
    'use strict';

    kintone.events.on('app.record.create.submit', function(event) {
      var URL = 'https://slack.com/api/chat.postMessage';

      var records = event.record;
      var channel = records['channel'].value;
      var text = records['text'].value;

      var body = {
        "channel": channel,
        "text": text,
        "as_user": true
      }

      kintone.plugin.app.proxy(PLUGIN_ID, URL, 'POST', {}, body, function(body, status, headers) {
      }, function(error) {
        console.log(error);
      });
      return event;
    });

})(kintone.$PLUGIN_ID);

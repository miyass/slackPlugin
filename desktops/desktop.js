(function(PLUGIN_ID) {
  'use strict';

  var submitEvent = [
    'app.record.edit.submit',
    'app.record.create.submit',
    'app.record.index.edit.submit'
  ];
  kintone.events.on(submitEvent, function(event) {
    var URL = 'https://slack.com/api/chat.postMessage';
    var record = event.record;
    var channel = record.channel.value;
    var text = record.text.value;
    var body = {
      'channel': channel,
      'text': text,
      'as_user': true
    };

    kintone.plugin.app.proxy(PLUGIN_ID, URL, 'POST', {}, body, function(response, status, headers) {
    }, function(error) {
      console.log(error);
    });
    return event;
  });
})(kintone.$PLUGIN_ID);

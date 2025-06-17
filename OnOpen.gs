//Creates the new UI Options when the code opens
function onOpen() {
  var ui = DocumentApp.getUi();
  ui.createMenu('Clean')
  .addItem('Quick Clean','cleanDiscordText')
  .addItem('Clear Date Tags', 'cleanTimeStamps')
  .addItem('Clear Username', 'cleanUsernamePrmt')
  .addItem('Clear Custom Emojis','cleanCustomEmojis')
  .addItem('Clear Classic Emojis', 'cleanEmojis')
  .addToUi()
}

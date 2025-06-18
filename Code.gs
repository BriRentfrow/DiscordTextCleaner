// Runs all the functions
function cleanDiscordText() {

  cleanUsernamePrmt()
  cleanTimeStamps()
  cleanCustomEmojis()
  cleanEmojis()
  
}

//Cleans out all the date stamps
function cleanTimeStamps() {
  var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody()
  
  //These will differ depending on your language settings, these are in Month/Day/Year and 12-hour format. 
  const date = '\\d{1,2}/\\d{1,2}/\\d{4} \\d{1,2}:\\d{2} [AP]M'
  const yesterday = 'Yesterday at \\d{1,2}:\\d{2} [AP]M'
  const today = 'Today at \\d{1,2}:\\d{2} [AP]M'
  const today2 = '\\d{1,2}:\\d{2} [AP]M'

  body.replaceText(date,"")
  body.replaceText(yesterday,"")
  body.replaceText(today,"")
  body.replaceText(today2,"")

}

//Prompts the user for a username input for deleting from the file
function cleanUsernamePrmt(){
  const ui = DocumentApp.getUi()
  const input = ui.prompt('Clear Username', 'Enter the Discord Server Nickname or Username to remove from text:', ui.ButtonSet.OK_CANCEL)

  if (input.getSelectedButton() == ui.Button.OK) {
    const discordName = input.getResponseText()
    cleanUsername(discordName)
  }

}

//Cleans out all instances of the username along with the dash discord adds when you copy paste it
function cleanUsername(discordName) {
  var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody()
  //Include the dash that discord adds when copying and pasting
  const name = discordName + " — "

  body.replaceText(name,"")

  //make sure we got the normal username instances without the dash
  body.replaceText(discordName,"")

}

//Cleans out all the custom emojis. This regex is likely not perfect but will remove most cases
function cleanCustomEmojis() {
  var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody()

  const customEmoji = ':[A-Za-z0-9]+:|:[A-Za-z0-9]+~[0-9]+:|:([A-Za-z]+(_[A-Za-z]+)+):'
  body.replaceText(customEmoji, '')
}

//Cleans all emoji characters
function cleanEmojis() {
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody()
const emojis = '\\p{Emoji_Presentation}'

body.replaceText(emojis, "")

}

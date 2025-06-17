# Discord Text Cleaner
A Google Apps Script to clean text from copied and pasted Discord text on a Google Doc. This is intended to automate formatting a mass copy/paste of Discord messages to leave only the plain text. This code can be run on messages that have been copied into a Google Doc using Ctrl + Shift + V so that it doesn't take on the Discord formatting. This code does not run on Discord itself, only on Google Docs. 

The features of this program are as follows:
- Remove incstances of Username / Server Nickname (A prompt will appear that asks for the name)
- Remove Time Stamps
- Remove both Native and Custom Emojis

## How to Use

### What you need:
- A Google Doc that contains a chat log copied from Discord
- A Google account with permission to use Google Apps Script


## Want to add Features and Improvements?
You are very welcome to fork this and send a pull request. I wrote this in an afternoon and it works for my hobby needs, but more things could be added or improved. 
Features that I could think of that could be added (I may or may not add later):
- Regex that selects dialouge (text in quotes) and bolds and/or adds HTML bold tags.
- Adding HTML paragraph break tags between paragraphs
- Selecting of tagged users (starting with an @ sign) and removal of those tags
- Removal of extra spaces left by removals
- Improvement to custom emoji Regex

## This Readme is a work in progress

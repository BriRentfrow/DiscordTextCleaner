# Discord Text Cleaner for Google Docs
A Google Apps Script to clean text from copied and pasted Discord text on a Google Doc. This is intended to automate formatting a mass copy/paste of Discord messages to leave only the plain text. This code can be run on messages that have been copied into a Google Doc using Ctrl + Shift + V so that it doesn't take on the Discord formatting. **This code does not run on Discord itself, only on Google Docs.** 

The features of this program are as follows:
- Remove instances of Username / Server Nickname (A prompt will appear that asks for the name)
- Remove Time Stamps
- Remove both Native and Custom Emojis

## How to Use

### What is included in this repo?

- **Code.gs** : Contains the functions you need to run the text cleaner
- **Example.txt** : Contains an example you can use to test the functions
- **OnOpen.gs** : Allows you to run the function through your doc's UI
- **README.md** : You are here! Talks about the features and how to use the program.

### What you need:
- A Google Doc that contains a chat log copied from Discord (or you can copy Example.txt)
- A Google account with permission to use Google Apps Script (This should work on a normal Google account)

1. Navigate to the Apps Script Page
It will be under the extensions tab. Clicking this will open a new tab.
![alt text](https://github.com/BriRentfrow/DiscordTextCleaner/blob/main/images/1.gif?raw=true "Step 1 Navigate to the Apps Script Page")

2. Copy the contents of Code.gs into your Code.gs and you may choose to copy OnOpen.gs at the top of that same file or create a new OnOpen.gs file to the left side
  
![alt text](https://github.com/BriRentfrow/DiscordTextCleaner/blob/main/images/2.gif?raw=true "Step 2 Add the Code")
3. Save the project and attempt to run the code
4. It will prompt you to authorize that you trust the app, you will need to accept it for the code to be allowed to run. You may need to click the "Advanced" option to do so. If so, it will be the small option "Continue to ProjectName (Unsafe)"
> Note: This code does not use any of your information, it only makes the modifications to the document it is on. That being said, using it is your own risk and I do not take responsibility for lost data. The functions **can** be undone once run.

![alt text](https://github.com/BriRentfrow/DiscordTextCleaner/blob/main/images/3.gif?raw=true "Step 3-4 Security")

5. Run the code. First click the run button in the Apps Script Page. Then go back to your document and at the top you'll find a new option "Clean". To run the full cleaner, click the "Quick Clean" Option. It will prompt you for the username you want to remove the instances of (This is only used for the removal and not stored anywhere).
![alt text](https://github.com/BriRentfrow/DiscordTextCleaner/blob/main/images/4.gif?raw=true "Step 5 Run Code")

## Want to add Features and Improvements?
You are very welcome to fork this and send a pull request. This project is Open Source. I wrote this in an afternoon and it works for my hobby needs, but more things could be added or improved. 
Features that I could think of that could be added (I may or may not add later):
- Regex that selects dialouge (text in quotes) and bolds and/or adds HTML bold tags.
- Adding HTML paragraph break tags between paragraphs
- Selecting of tagged users (starting with an @ sign) and removal of those tags
- Removal of extra spaces left by removals
- Improvement to custom emoji Regex (It may not catch all custom emojis, if you encounter one it doesn't please let me know)

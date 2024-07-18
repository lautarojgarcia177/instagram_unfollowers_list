# Get to know the people that does not follow you back on Instagram

## This is a non invasing method, without any risk or third party apps that you are not sure what they do on your device.

### Steps
1. Ask to download your instagram information in JSON format

link as of July 2024: https://accountscenter.instagram.com/info_and_permissions/dyi/

Be sure to select Connections -> Followers and Following

2. Wait for the email with your information and download it

3. place the compare.js file in the same directory that "followers_1.json" and  "following.json" files

4. Make sure you have [node.js](https://nodejs.org/) installed

5. Run `node compare.js`

6. You will get a new file "unfollowers" generated with the list of all the accounts that does not follow you back

### How it works
Its very simple, the script creates 2 arrays from JSON files:
- array with all the accounts that follow you
- array with all the accounts that you follow

Then it compares the arrays, outputing a new array with all the account names that are present in the "you follow" array but aren't present in the "follow you" array

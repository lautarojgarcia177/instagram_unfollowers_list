# Get to know the people that does not follow you back on Instagram

### Steps
1. Ask to download your instagram information in JSON format

link as of July 2024: https://accountscenter.instagram.com/info_and_permissions/dyi/

Be sure to select Connections -> Followers and Following

2. Wait for the email with your information and download it

3. place the compare.js file in the same directory that "followers_1.json" and  "following.json" files

4. Make sure you have [node.js](https://nodejs.org/) installed

5. Run `node compare.js`

6. You will get a new file "unfollowers" generated with the list of all the accounts that does not follow you back


const fs = require("fs").promises;
const path = require("path");

// Utility function to read JSON from file
async function readJsonFile(filepath) {
  try {
    const data = await fs.readFile(filepath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error(`Error reading or parsing the file ${filepath}:`, err);
    throw err;
  }
}

// Utility function to write JSON to file
async function writeJsonFile(filepath, obj) {
  try {
    const jsonString = JSON.stringify(obj, null, 2);
    await fs.writeFile(filepath, jsonString, "utf8");
    console.log("Successfully wrote to file:", filepath);
  } catch (err) {
    console.error(`Error writing to the file ${filepath}:`, err);
    throw err;
  }
}

// Retrieve followings
async function retrieveFollowings() {
  const jsonObject = await readJsonFile(path.join(__dirname, "following.json"));
  return jsonObject.relationships_following.map(
    (e) => e.string_list_data[0].value
  );
}

// Retrieve followers
async function retrieveFollowers() {
  const jsonObject = await readJsonFile(
    path.join(__dirname, "followers_1.json")
  );
  return jsonObject.map((e) => e.string_list_data[0].value);
}

// Find missing elements in the first array compared to the second array
function findMissingElements(array1, array2) {
  const set1 = new Set(array1);
  return array2.filter((element) => !set1.has(element));
}

// Main function to execute the script
async function execute() {
  try {
    const [following, followers] = await Promise.all([
      retrieveFollowings(),
      retrieveFollowers(),
    ]);
    const unfollowers = findMissingElements(followers, following); // Corrected logic for finding unfollowers
    await writeJsonFile(path.join(__dirname, "unfollowers.json"), unfollowers);
  } catch (err) {
    console.error("Error in execution:", err);
  }
}

execute();

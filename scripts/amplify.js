const liveUpdates = JSON.parse(process.env._LIVE_UPDATES);
const amplifyAppId = process.env.AMPLIFY_BACKEND_APP_ID;
const userBranch = process.env.USER_BRANCH;

console.log('Live Updates:', liveUpdates);
console.log('Amplify App ID:', amplifyAppId);
console.log('User Branch:', userBranch);

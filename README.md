# Roblox JobId Join Chrome Extension

This browser extension allows you to join a Roblolx server with a specific job ID.

This extension is intended to allow games to generate direct links to servers. A job ID can be obtained with [`game.JobId`](https://developer.roblox.com/en-us/api-reference/property/DataModel/JobId) in Roblox Lua.

It is available on the following platforms:
- [Chrome Web Store](https://chrome.google.com/webstore/detail/roblox-jobid-join/pdeebkpgdaflejgihpbniammmelkdnac)
- [Firefox Add-ons](https://addons.mozilla.org/firefox/addon/roblox-jobid-join)

## Usage

To join a server, add a `serverJobId=<job-id>` query parameter to the URL. This will automatically launch Roblox much like links with VIP server codes do.

## Examples
- [https://www.roblox.com/games/920587237/Adopt-Me?**serverJobId=9134c999-91d5-4b52-9f0a-f7cbae67fe77**](https://www.roblox.com/games/920587237/Adopt-Me?serverJobId=9134c999-91d5-4b52-9f0a-f7cbae67fe77)
- [https://www.roblox.com/games/185655149/Welcome-to-Bloxburg-BETA?refPageId=90baf355-52b1-43fa-947a-9a82fafdbe4a&**serverJobId=b6f574b5-72d5-49fb-9fca-7de90981a2dc**](https://www.roblox.com/games/185655149/Welcome-to-Bloxburg-BETA?refPageId=90baf355-52b1-43fa-947a-9a82fafdbe4a&serverJobId=b6f574b5-72d5-49fb-9fca-7de90981a2dc)

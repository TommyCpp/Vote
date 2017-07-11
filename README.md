# Vote
Simple vote system boosted by Node.js,Express and Angular

## Setup
* Download the file / Clone
* Use `npm install` to install the package 
* Create the `config.js` by `config.example.js`
* Use http://localhost:3000 to access

## Feature
* High concurrency
* Use Redis as main database
* Config the vote item and subject

## API

Method | URL | Header | Expect Return | Comment
--- | --- |---| --- | ---
GET | /vote | | `{ canadians:[], limit:Number}; Header: X-VOTE-TOKEN`| List of the Canadians, <br> Note that the *client* shall save the X-VOTE-TOKEN to local storage and if the user flush the page, get another token, **old token shall remain** and the new one need to be abandoned
POST| /vote |`X-VOTE-TOKEN`| `{ target:String[] }`| Choose 
GET | /admin | | `Header:X-AUTHENTICATION` | Admin page
POST | /admin/delete | `X-AUTHENTICATION` | | Delete all the data




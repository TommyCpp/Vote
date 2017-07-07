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
GET | /vote | | `{ canadians:[], limit:Number}; Header: X-VOTE-TOKEN`| List of the Canadians
POST| /vote |`X-VOTE-TOKEN`| `{ target:String[] }`| Choose 




# Vote
Simple vote system boosted by Node.js,Express and Jquery

## Setup
* Use http://localhost:3000 to access

## Feature
* High concurrency in short time
* Use Redis as main database
* Config the vote item and subject


## API

Method | URL | Expect Return | Comment
--- | --- | --- | ---
GET | /vote | `{ canadians:[], limit:Number}`| List of the Canadians
POST| /vote | `{ target:String[] }`| Choose



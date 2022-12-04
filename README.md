
#phase-1-code-challenge-flatacuties-080421

Flatacuties, an app where you can vote for the c utest animal! All while using a local API to build out the frontend for the app.

Project Guidelines
Your project should conform to the following set of guidelines:

Core Deliverables:
As a user, I can:

See a list of all animal names. You will need to make a GET request to the following endpoint to retrieve the character data
 

 GET /characters

 Example Response:

   {
       
     "id": 1,

     "name": "Mr. Cute",

     "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",

     "votes": 0

   },

   {

     "id": 2,

     "name": "Mx. Monkey",

     "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",

     "votes": 0   }, ….]


 

2. Click on an animal’s name to see its details i.e image and number of votes. Note, you should only be displaying the details of one animal at a time. You can either use the character information from your first request, or make a new request to this endpoint to get the character's details.

 

GET /characters/:id

Example Response: 

{

     "id": 1,

     "name": "Mr. Cute",

     "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",

     "votes": 0

   },


 

3.  When viewing an animal’s details, I should be able to add the number of votes for each animal. This number of votes should then be displayed together with the animal’s details. No persistence is needed for the votes.



## Authors

- [@keithkiama](https://www.github.com/keithkiama)


## Installation

Clone this repository to your local machine and navigate into the code-challenge-flatacuties directory
.Once inside the direcory run ruby bin/start Keith in order to get access to the code challenge direcory.Once inside the directory you can launch the json server by typing in
```bash
    1. cd phase-1-code-challenge-flatacuties-080421
    2. cd code-challenge-flatacuties
    3. cd code-challenge
    4. json-server --watch db.json(Opens the json server)
    5. localhost:<port-number>(Opens the index.html file locally)
```
    
## Support

For support, email keith.maina01@student.moringaschool.com or message me  on slack.


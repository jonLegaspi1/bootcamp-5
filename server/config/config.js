//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://mrmaster3:A27WH!uP@ds139884.mlab.com:39884/assignment4bootcamp', //place the URI of your mongo database here.
  }, 
  googleMaps: {
    key: ''
  },
  port: 8080
};

// mongoimport -h ds123124.mlab.com:23124 -d assignment3 -c listings1 -u mrmaster3 -p A27WH!uP --file listings.json
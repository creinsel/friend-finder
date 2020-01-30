var friends=require("../data/friends")

module.exports = function(app) {

    // Get all friends
    app.get("/api/friends", function(req, res) {
  
     
      friend.findAll({}).then(function(results) {
        // results are available to us inside the .then
        res.json(results);
      });
  
    });
  
    // Add a friend
    app.post("/api/friends", function(req, res) {
      
      console.log("friend Data:");
      console.log(req.body);

      friends.push(req.body)
  
      
        // `results` here would be the newly created chirp
        res.end();
      });
  
    
  
  };
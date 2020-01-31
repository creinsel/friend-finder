var friends=require("../data/friends")


module.exports = function(app) {

    // Get all friends
    app.get("/api/friends", function(req, res) {
  
     
      friend.findAll({}).then(function(results) {

        $(".submit").on("click", function(event){
          event.preventDefault();

          


          let name=$("#name").val().trim();
          let photo=$("#photo").val().trim();
          
          console.log("hi my name is: ", name)

          if(name==="" ||photo=== ""|| scores==="Select an option"){
       
              
              alert("Please answer all questions")

              }
              else{
                  newFriend={
                      name:name,
                      photo:photo,
                      scores:scores

                  }
                  newFriend.push(friends)
                  console.log("friends: ", friends)
                  
              }
                  
          })
        // results are available to us inside the .then
        res.json(results);
      });
  
    });
  
    // Add a friend
    app.post("/api/friends", function(req, res) {
      
      console.log("friend Data:");
      console.log(req.body);

      friends.push(req.body);
      console.log(friends);
  
      
        // `results` here would be the newly created chirp
        res.end();
      });
  
      
  
  };
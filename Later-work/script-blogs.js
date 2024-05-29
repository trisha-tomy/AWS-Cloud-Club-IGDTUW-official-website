const titles = [
    "AWS Unveiled: The Definitive Handbook on Amazon Web Services"
    , "Getting Started with Cloud Computing: Basics and Benefits", "Understanding AWS Services: A Primer for Beginners",
    "Cloud Security 101: Keeping Your Data Safe on AWS"
    , "Migrating to the Cloud: Steps for a Successful Transition"
    , "Budgeting for the Cloud: Tips for AWS Newbies"
    ,
    "Introduction to Serverless Computing: Building Apps Without Infrastructure"
    , "A Beginner’s Guide to Building Your First Cloud Application on AWS"
    , "Networking Basics on AWS: Understanding VPCs and Subnets"
    
  
  ];
  
  // Date doesn't seem to work properly on Codepen??? so using hardcoded values;
  const times = ['12-04-24', '14-04-24', '17-04-24','22-04-24', '25-04-24', '28-04-24','30-04-24', '03-05-24', '08-05-24'];
  const authors = ['author 1', 'author2', 'author3','author 4', 'author5', 'author6','author 7', 'author8', 'author9'];
  const num_cards = titles.length;
  
  var title_elements = document.getElementsByClassName("title");
  var author_elements = document.getElementsByClassName("author");
  var time_elements = document.getElementsByClassName("time");
  
  //update each card
  var i;
  for (i = 0; i < num_cards; i++) {
    //update title
    title_elements[i].innerHTML = titles[i];
    //update author
    author_elements[i].innerHTML = 'By ' + "<span class='green'>" + authors[i] + "</span>";
    //update posting time
    time_elements[i].innerHTML = 'Posted On <span class="green">'+ times[i] + '</span>'
  }
document.addEventListener("DOMContentLoaded", function() {
  var showDiv = document.querySelector('.show')
  var ul = document.createElement('ul');


  // Imagination!
  $.ajax({
    url:'https://bb-election-api.herokuapp.com/',
    method: 'GET'
  }).done(function(responseData) {
    for (var i = 0; i < responseData.candidates.length; i++) {
      console.log(responseData.candidates);
      var li = document.createElement('li');
      li.innerHTML = responseData.candidates[i].name + " - " + " votes: " + responseData.candidates[i].votes;
      ul.append(li);
      showDiv.append(ul);
    }
  })
});

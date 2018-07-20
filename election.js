document.addEventListener("DOMContentLoaded", function() {
  var showDiv = document.querySelector('.show')
  var ul = document.createElement('ul');
  var showCandidates = document.querySelector('.show_candidates');


  // Imagination!

  //ajax call

  $.ajax({
    url:'https://bb-election-api.herokuapp.com/',
    method: 'GET'
  }).done(function(responseData) {
    for (var i = 0; i < responseData.candidates.length; i++) {

    // generate form for election

      var form = document.createElement('form');
      var input_hidden = document.createElement('input');
      var input_button = document.createElement('input');
      input_button.type = 'submit';
      input_button.value = 'Vote';
      input_hidden.type ='hidden';
      input_hidden.name = 'name';
      input_hidden.value= responseData.candidates[i].name;
      var li = document.createElement('li');
      form.append(input_hidden, input_button);
      form.method = 'POST'
      form.action = 'https://bb-election-api.herokuapp.com/vote?name=';
      li.innerHTML = responseData.candidates[i].name + " - " + " votes: " + responseData.candidates[i].votes;
      li.append(form);
      ul.append(li);
    }
      showDiv.append(ul);

      ul.addEventListener('submit', function(e) {
          e.preventDefault();
          var form = e.target

          $.ajax({
            url:'https://bb-election-api.herokuapp.com/vote',
            method:'POST',
            data:$(form).serialize()
          }).done(function(responseData){
            showCandidates.click();

        })
      })
  })
});

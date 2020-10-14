function onClick(e) {
  e.preventDefault();
  // get form values
  let word = document.getElementById('word').value;
  let type = document.getElementById('selector').value;



  // setup URL
  let url = "https://wordsapiv1.p.rapidapi.com/words/" + word + "/" + type;

  // call API
  fetch(url, {
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
  		"x-rapidapi-key": "d93a51b9b7msh6f872556b3d3b80p1ba81ejsn23bf24d7f05e"
  	}
  })
    .then(function(response) {
      // debugger
      // console.log(response.json());

      return response.json();
    }).then(function(json) {
      // update DOM with response
      updateResult(json);
    });
}

function updateResult(info) {
  var request_type = document.getElementById('selector').value;

  if (request_type == 'definitions') {
    document.getElementById('selection').textContent = 'Defenitions';
    var definition = info[request_type];
    var result = "<ol>";

    for (i=0; i<definition.length;i++) {
      result += "<li>" + definition[i].definition + "</li>";
    }
    result += "</ol>"
    document.getElementById('result').innerHTML = result;
  }



  if (request_type == 'synonyms') {
    document.getElementById('selection').textContent = 'Synonyms';
    var synonyms = info[request_type];
    var result = "<ul>";
    for (i=0; i<synonyms.length;i++) {
      result += "<li>" + synonyms[i] + "</li>";
    }
    result += "</ul>"
    document.getElementById('result').innerHTML = result;
  }



  if (request_type == 'antonyms') {
    document.getElementById('selection').textContent = 'Antonyms';
    var antonyms = info[request_type];
    var result = "<ul>";
    for (i=0; i<antonyms.length;i++) {
      result += "<li>" + antonyms[i] + "</li>";
    }
    result += "</ul>"
    document.getElementById('result').innerHTML = result;
  }


  if (request_type == 'examples') {
    document.getElementById('selection').textContent = 'Examples';
    var examples = info[request_type];
    var result = "<ul>";
    for (i=0; i<examples.length;i++) {
      result += "<li>" + examples[i] + "</li>";
    }
    result += "</ul>"
    document.getElementById('result').innerHTML = result;
  }


  if (request_type == 'rhymes') {
    document.getElementById('selection').textContent = 'Rhymes';
    var rhymes = info[request_type];
    var result = "<ul>";
    for (i=0; i<rhymes.all.length;i++) {
      result += "<li>" + rhymes.all[i] + "</li>";
    }
    result += "</ul>"
    document.getElementById('result').innerHTML = result;
  }
}

document.getElementById('get_data').addEventListener('click', onClick);

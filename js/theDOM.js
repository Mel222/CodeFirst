document.addEventListener('DOMContentLoaded', function() {
  // Your code here...
  var header1 = document.getElementsByTagName('h1');
  console.log(header1);

  var header2 = document.getElementById('headerID');
  console.log(header2);
  
  header1[0].style.color = 'blue';
  header2.style.color = 'green';

  header2.style.fontSize = '40px';
  header2.style.background = 'yellow';
  header2.style.padding = '10px';
  header2.style.border = '2px dashed blue';

  var newParagraph = document.createElement('p');
  newParagraph.innerText = 'I have just been created with Javascript!';
  document.body.appendChild(newParagraph);

  header2.addEventListener('click', function(event) {
    console.log(event);
    console.log(event.target);
    event.target.style.color = 'pink';
  });

  var newParagraph2 = document.createElement('p');
  newParagraph2.innerText = 'I am sleepy';
  newParagraph2.style.fontSize = '18px';
  newParagraph2.style.fontFamily = 'sans-serif';
  newParagraph2.style.width = '100px';
  newParagraph2.style.border = '1px solid orange';
  newParagraph2.style.padding = '30px';
  document.body.appendChild(newParagraph2);

  newParagraph2.addEventListener('mouseenter', function(event){
    event.target.style.color = 'pink';
    
  })
});

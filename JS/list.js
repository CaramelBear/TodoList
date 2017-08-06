
function getText(){

  var inputText = document.getElementById('input-field').value;

  if(inputText !== ""){
    document.getElementById('input-field').value = "";

    var node = document.createElement('li');
    var text = document.createTextNode(inputText);
    node.appendChild(text);

    var list = document.getElementById('todo-list');
    list.appendChild(node);
  }

}

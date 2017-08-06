if($){
  console.log("jQuery loaded");
}else{
  console.log("jQuery not loaded");
}


var inputField = $('#input-field');
var addButton = $('#add-button');
var listContainer = $('#todo-list');

function createListItem(text){
  if(text!== ""){
    return $("<li></li>").text(text);
  }


}

function getText(){
  return inputField.val();
}

function clearInput(){
  inputField.val("");
}

$(addButton).click(function(){
  var newText = getText();
  var newListItem = createListItem(newText);
  $(listContainer).append(newListItem);
  clearInput();
});

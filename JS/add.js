var todoText = "Please Enter a Todo:";
var listOfTodos = [];
var deleteButtonNumber = 0;


var app = new Vue({
  el: "#master-container",
  data:{
    message: todoText,
    todoList: listOfTodos
  },
  methods:{
    add: function(){
      insertTodo();
      clearInput();

    },
    deleteItem:function(){
      deleteTodo(event);
    },
    deleteAll:function(){
      deleteAllTodos();
    }

  }
});

function clearInput(){
  document.getElementById("input-field").value = "";
}

function insertTodo(){
  var inputField = document.getElementById('input-field').value;
  if(inputField !== ""){
    listOfTodos.unshift({'todoItem':inputField,'key':"button_ID_"+deleteButtonNumber});
    deleteButtonNumber++;
  }
}

function deleteTodo(event){
  var buttonID = event.currentTarget.id;
  var child = document.getElementById(buttonID);
  var text = child.parentElement.innerText;
  text = text.trim();
  console.log(text);
  console.log(text.length);
  console.log(text.substring(0,text.length-6).trim());

}

function deleteAllTodos(){
  var listLength = listOfTodos.length;
  for(var i = 0; i<=listLength; i++){
    listOfTodos.shift();
  }

}

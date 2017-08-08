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
  var key = buttonID.substring(10,);

  var child = document.getElementById(buttonID);
  var text = child.parentElement.innerText;
  text = text.trim();

  var itemToDelete = text.substring(0,text.length-6).trim();

  var counter = 0;

  if(listOfTodos.length ==1){
    listOfTodos.pop();
  }

  for(var i = 0; i<listOfTodos.length; i++){
    if(itemToDelete == listOfTodos[i].todoItem  && buttonID ==listOfTodos[i].key){
      listOfTodos.splice(counter,1);
    }

    counter ++;
  }

}

function deleteAllTodos(){
  var listLength = listOfTodos.length;
  for(var i = 0; i<=listLength; i++){
    listOfTodos.shift();
  }

}

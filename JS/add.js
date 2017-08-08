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
      deleteTodo();
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
    listOfTodos.unshift({'todoItem':inputField,'key':"button-ID_"+deleteButtonNumber});
    deleteButtonNumber++;
  }
}

function deleteTodo(){

}

function deleteAllTodos(){
  var listLength = listOfTodos.length;
  for(var i = 0; i<=listLength; i++){
    listOfTodos.shift();
  }

}

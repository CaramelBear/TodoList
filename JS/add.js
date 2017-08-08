var todoText = "Please Enter a Todo:";
var listOfTodos = [];



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
    }
  }
});

function clearInput(){
  document.getElementById("input-field").value = "";
}

function insertTodo(){
  var inputField = document.getElementById('input-field').value;
  if(inputField !== ""){
    listOfTodos.push({'todoItem':inputField});
    console.log(listOfTodos);
  }
}

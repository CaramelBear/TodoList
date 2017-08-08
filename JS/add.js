var todoText = "Please Enter a Todo:";
var todoList = [];



var app = new Vue({
  el: "#master-container",
  data:{
    message: todoText
  },
  methods:{
    add: function(){
      getInput();
      clearInput();
    }
  }
});

function clearInput(){
  document.getElementById("input-field").value = "";
}

function getInput(){
  var inputField = document.getElementById('input-field').value;
  if(inputField !== ""){
    console.log(inputField);
  }
}

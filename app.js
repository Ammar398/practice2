var ques = document.getElementById("ques");
var totalques = document.getElementById("totalques");
var options = document.getElementById("options");
var btn = document.getElementById("btn");
var correctques = document.getElementById("correctques");


var questions = [
    {
         
            ques = "HTML stands for ?",
            options=["Hyper text markup language" , "Hyper tell markup language" , "Hyper text makeup language" ,"Hypo text markrup language"],
            correct = "Hyper text markup language",
        
    },

    {
         
        ques = "CSS stands for ?",
        options=["Cascading style heat" , "Caspandilng style sheet" , "Cascading style sheet" , "Cascading slite sheet"],
        correct = "Cascading style sheet",
    
},
{
         
    ques = "RAM stands for ?",
    options=["Random Access Memory" , "Random Access memorial" , "Random Aknowledge Memory" , "Read Access Memory"],
    correct = "Random Access Memory",

},
{
         
    ques = "ROM stands for ?",
    options=["Random only memmoy" , "Read only memmoy" , "Read of memmoy" , "Read only memorial"],
    correct = "Read only memmoy",

},
{
         
    ques = "DOM stands for ?",
    options=["Document Oblique Moral" , "Document Orid Model" , "Document Object Magine" , "Document Object Model"],
    correct = "Document Object Model",

},
{
         
    ques = "ES6 stands for ?",
    options=["ECMA Script 6" , "EMAK Script 6" , "ECMA Scriptal 6" , "EAMS Script 6"],
    correct = "ECMA Script 6",

},
]

var correctans = 0;
var totalans = questions.length;

function dispayQU(){
    ques.innerHTML = for(var i = 0 ; i < questions[0].options.length ; i++){
        options.innerHTML = `<div class="row">
        <div class="col-md-6">
          <p class="rounquestions[0].ques;
    ded-pill">'${questions[0].options[0]}'</p> 
          <p class="rounded-pill">'${questions[0].options[1]}'</p>
        </div>
        <div class="col-md-6">
          <p class="rounded-pill">"${questions[0].options[2]}"</p>
          <p class="rounded-pill">"${questions[0].options[3]}"</p>
        </div>
      </div>`
    }
    totalques.innerHTML = totalans;
    correctques.innerHTML = correctans + 1;
}
dispayQU()
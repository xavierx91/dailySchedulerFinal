// displays time at top of page *
function displaytime(){
    var datetime=moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(datetime);
}
setInterval(displaytime,0);

var nineAm=$(".9am");
var tenAm=$(".10am");
var elevenAm=$(".11am");
var twelvePm=$(".12pm");
var onePm=$(".1pm");
var twoPm=$(".2pm");
var threePm=$(".3pm");
var fourPm=$(".4pm");
var fivePm=$(".5pm");
var before;
var present=true;
var after;
var data1=$("#localD1");
var data2=$("#localD2");
var data3=$("#localD3");
var data4=$("#localD4");
var data5=$("#localD5");
var data6=$("#localD6");
var data7=$("#localD7");
var data8=$("#localD8");
var data9=$("#localD9");
var localDataArray=[
    data1,data2,data3,data4,data5,data6,data7,data8,data9
]


var times=[
    nineAm,tenAm,elevenAm,twelvePm,onePm,twoPm,threePm,fourPm,fivePm
];
var numbers=[
    num1=0,num2=0,num3=0,num4=0,num5=0,num6=0,num7=0,num8=0,num9=0]
var timet=0; //current time
var a =0;
//displays time and does everything
function displaytime(){
    var datetime=moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(datetime);
    var time=moment().format('H');
    JSON.stringify(time);
    timet=parseInt(time);
    a =timet-9;
    checkTime();
}
//colors rows
function checkTime(){
    if (present){
        if (timet > 17) {
            a=0;
        }
        times[a].css('background-color', 'red');
        times[a].css('color', 'white');
        if(timet>=9&&timet<17 || timet === 17){
        for(var i=a+1;i<times.length;i++){
            times[i].css('background-color', 'green');
            times[i].css('color', 'white');
        }
        for (var b=a-1;b>=0;b--){
            times[b].css('background-color', 'grey');
            times[b].css('color', 'white');
        }
    }
    else if(timet>17||timet<9){
        for(var i=0;i<times.length;i++){
            times[i].css('background-color', 'green');
            times[i].css('color', 'white');
        }
    }
    }   
}
function saveToStorage(row,dataAsAString){
    localStorage.setItem(("Hour-"+row),dataAsAString);
}
//get row data from storage
function getFromStorage(row){
    return localStorage.getItem(("Hour-"+row),dataAsAString);
}
setInterval(displaytime,0);
$('.buttons1').click(function(){
    for(var l=0;l<localDataArray.length;l++){
        numbers[l]=l;
    event.preventDefault();
    JSON.stringify(numbers[l]);
    JSON.stringify(localDataArray[l].val());
    saveToStorage(numbers[l],localDataArray[l].val());
    console.log("working")
    }

    function init() {
        var localDataArray = JSON.parse(localStorage.getItem("todos"));

  // If todos were retrieved from localStorage, update the todos array to it
  if ( localDataArray !== null) {
    todos = storedTodos;
  }

    }
    

});










// save row to local storage *
// the row is going to be this
//data to save looks like
// function saveRowToLocalStorage(row, dataToSaveAsString){
//     localStorage.setItem("hour-"+row, dataToSaveAsString);
// }

// // get row data from local storage  //row is 14
// function getRowFromLocalStorage(row) {
//     return localStorage.getItem("hour-"+row)   //"hour-14"
// }

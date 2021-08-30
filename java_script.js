function remove (element){
    element.remove();
}


var count = 3;
var counting = document.querySelector("#pet1");
function add ()
{
    count++;
    counting.innerText = count + " petting(s)";
    console.log(count);
}


var count2 = 5;
var counting2 = document.querySelector("#pet2");
function add2 ()
{
    count2++;
    counting2.innerText = count2 + " petting(s)";
    console.log(count2);
}

var count3 = 8;
var counting3 = document.querySelector("#pet3");
function add3 ()
{
    count3++;
    counting3.innerText = count3 + " petting(s)";
    console.log(count3);
}


function choose1(select)
{
    alert(select.options[select.selectedIndex].text);
}
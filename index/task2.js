function display(id1, id2) {
    var a =document.getElementById(id1).innerHTML;
    var b =document.getElementById(id2).innerHTML;
    document.getElementById("title").innerHTML = a;
    document.getElementById("subtitle").innerHTML = b;
    }
function openTab(evt, name) {
    // Declare all variables
    // evt.preventDefault();
    var i, content, tablinks;
  
    // Get all elements with class="content" and hide them
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
  
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
    document.getElementById("defaultOpen").click();
​
  }




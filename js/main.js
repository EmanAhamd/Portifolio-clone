// nav
window.onscroll = function(){
    if (window.scrollY > 55 ) {
        document.getElementById("nav").classList.add("fix");
        document.getElementById("nav").classList.remove("normal");
    }else{
        document.getElementById("nav").classList.add("normal");
        document.getElementById("nav").classList.remove("fix");
    }
    // scroll up button visibal and hiddden
    var myBtn = document.getElementById('btun');
    if(window.scrollY > window.innerHeight ){
        myBtn.classList.add('block');
    }else{
        myBtn.classList.remove('block');
    }
}
// email in footer
function success() {
    if(document.getElementById("input").value==="") { 
        document.getElementById('send').disabled = true; 
        } else { 
        document.getElementById('send').disabled = false;
    }
}
// function validationForm() {
//     var x = document.getElementById("input").value;
//     if (x !== "") {
//         document.getElementById("input").classList.add("error");
    
//     }else{
//         document.getElementById("input").classList.remove("error");
//     }
// }

// scroll up button
function Top(){
    window.scrollTo(0, 0);
}



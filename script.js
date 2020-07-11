var frm = document.getElementById("submit");
frm.onclick = function(){
    sayFunction();
};

function sayFunction(){
    var name = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for(var i=0; i<name.length; i++){
        var firstLetter = name[i].charAt(0).toLowerCase();
        if(firstLetter === 'j'){
            bye.speak(name[i]);
        }
        else{
            hello.speak(name[i]);
        }
        return true;
    }
}




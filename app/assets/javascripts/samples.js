// grab keydown code + play sample + change background color
$(document).keypress(function(e) {
        if ( e.keyCode === 97 ) { //a
            function play1(){
                 var audio1 = document.getElementsByClassName("push")[0];
                 audio1.pause(); 
                 audio1.currentTime = 0; 
                 audio1.play();
            };
            play1();
        	document.getElementsByClassName("pad")[0].style.backgroundColor="white";
        }
        else if ( e.keyCode === 115 ) { //s
            function play2(){
                 var audio2 = document.getElementsByClassName("push")[1];
                 audio2.pause(); 
                 audio2.currentTime = 0; 
                 audio2.play();
            };
            play2();
            document.getElementsByClassName("pad")[1].style.backgroundColor="white";
        }
        else if ( e.keyCode === 102 ) { //f
            function play3(){
                 var audio3 = document.getElementsByClassName("push")[2];
                 audio3.pause(); 
                 audio3.currentTime = 0; 
                 audio3.play();
            };
            play3();
            document.getElementsByClassName("pad")[2].style.backgroundColor="white";
        }
        else if ( e.keyCode === 103 ) { //g
            function play4(){
                 var audio4 = document.getElementsByClassName("push")[3];
                 audio4.pause(); 
                 audio4.currentTime = 0; 
                 audio4.play();
            };
            play4();
            document.getElementsByClassName("pad")[3].style.backgroundColor="white";
        }
        else if ( e.keyCode === 118 ) { //v
            function play5(){
                 var audio5 = document.getElementsByClassName("push")[4];
                 audio5.pause(); 
                 audio5.currentTime = 0; 
                 audio5.play();
            };
            play5();
            document.getElementsByClassName("pad")[4].style.backgroundColor="white";
        }
        else if ( e.keyCode === 98 ) { //b
            function play6(){
                 var audio6 = document.getElementsByClassName("push")[5];
                 audio6.pause(); 
                 audio6.currentTime = 0; 
                 audio6.play();
            };
            play6();
            document.getElementsByClassName("pad")[5].style.backgroundColor="white";
        }     
        else if ( e.keyCode === 104 ) { //h
            function play7(){
                 var audio7 = document.getElementsByClassName("push")[6];
                 audio7.pause(); 
                 audio7.currentTime = 0; 
                 audio7.play();
            };
            play7();
            document.getElementsByClassName("pad")[6].style.backgroundColor="white";
        } 
        else if ( e.keyCode === 106 ) { //j
            function play8(){
                 var audio8 = document.getElementsByClassName("push")[7];
                 audio8.pause(); 
                 audio8.currentTime = 0; 
                 audio8.play();
            };
            play8();
            document.getElementsByClassName("pad")[7].style.backgroundColor="white";
        }    
    });


// change background color back to normal

$(document).keyup(function() {

        document.getElementsByClassName("pad")[0].style.backgroundColor="black";
        document.getElementsByClassName("pad")[1].style.backgroundColor="black";
        document.getElementsByClassName("pad")[2].style.backgroundColor="black";
        document.getElementsByClassName("pad")[3].style.backgroundColor="black";
        document.getElementsByClassName("pad")[4].style.backgroundColor="black";
        document.getElementsByClassName("pad")[5].style.backgroundColor="black";
        document.getElementsByClassName("pad")[6].style.backgroundColor="black";
        document.getElementsByClassName("pad")[7].style.backgroundColor="black";
    });


// this function grabs the new sample you want to load
function reply_click(clicked_id) {
    newSample = (clicked_id);
    alert(newSample);
}


// this function replaces the old sample with a new sample
function changeSrc(x) {
    x.innerHTML = newSample;
}




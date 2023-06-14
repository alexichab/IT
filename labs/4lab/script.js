bool = 0;
var idtimer;
delay = 1000;
function animation()
    {
        if(bool == 0)
        {
            document.img1.src = "s2.gif"
            bool = 1;
        }
        else if(bool==1)
        {
            document.img1.src = "s3.gif"
            bool = 2;
        }
        else if(bool==2)
        {
            document.img1.src = "s4.gif"
            bool = 3;
        }
        else if(bool==3)
        {
            document.img1.src = "s5.gif"
            bool = 4;
        }
        else if(bool==4)
        {
            document.img1.src = "s6.gif"
            bool = 5;
        }
        else if(bool==5)
        {
            document.img1.src = "s7.gif"
            bool = 6;
        }
        else if(bool==6)
        {
            document.img1.src = "s8.gif"
            bool = 7;
        }
        else if(bool==7)
        {
            document.img1.src = "s9.gif"
            bool = 8;
        }
        else if(bool==8)
        {
            document.img1.src = "s10.gif"
            bool = 9;
        }
        else if(bool==9)
        {
            document.img1.src = "s11.gif"
            bool = 10;
        }
        else if(bool==10)
        {
            document.img1.src = "s12.gif"
            bool = 11;
        }
        else if(bool==11)
        {
            document.img1.src = "s1.gif"
            bool = 0;
        }
        idtimer = setTimeout('animation()', delay);
    }
 
function start()
    {
        idtimer = setTimeout('animation()',delay);
 
    }
 
function stop()
    {
        clearTimeout(idtimer);
    }
 
// function start_n()
//     {
//         stop();
//         idtimer = setTimeout('animation()',delay);
//     }
 
function addspeed()
    {
        stop();
        delay = delay - 500;
        idtimer = setTimeout('animation()',delay);
    }
 
   function subspeed()
    {
        stop();
        delay = delay + 200;
        idtimer = setTimeout('animation()',delay);
    }
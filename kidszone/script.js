for(var i=0;i<document.querySelectorAll(".kid").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",handleclick);
}

function handleclick(){
    var buton=this.innerHTML;
    makesound(buton);
}

document.addEventListener("keydown",function(event){
    makesound(event.key)
});

function makesound(key){
    switch (key) {
        case "a":
            var aa= new Audio("sounds/a.mp3");
            aa.play() 
            document.getElementById("kidzee").innerHTML="A for Apple"           
            break;

        case "A":
            var aa= new Audio("sounds/a.mp3");
            aa.play() 
            document.getElementById("kidzee").innerHTML="A for Apple"           
            break;

        case "b":
            var bb= new Audio("sounds/b.mp3");
            bb.play() 
            document.getElementById("kidzee").innerHTML="B for Baseball"            
            break;

        case "B":
            var bb= new Audio("sounds/b.mp3");
            bb.play() 
            document.getElementById("kidzee").innerHTML="B for Baseball"            
            break;

        case "c":
            var cc= new Audio("sounds/c.mp3");
            cc.play()      
            document.getElementById("kidzee").innerHTML="C for Clock"       
            break;

        case "C":
            var cc= new Audio("sounds/c.mp3");
            cc.play()      
            document.getElementById("kidzee").innerHTML="C for Clock"       
            break;

        case "d":
            var dd= new Audio("sounds/d.mp3");
            dd.play()            
            document.getElementById("kidzee").innerHTML="D for Donkey" 
            break;

        case "D":
            var dd= new Audio("sounds/d.mp3");
            dd.play()            
            document.getElementById("kidzee").innerHTML="D for Donkey" 
            break;

        case "e":
            var ee= new Audio("sounds/e.mp3");
            ee.play()            
            document.getElementById("kidzee").innerHTML="E for Elephant" 
            break;

        case "E":
            var ee= new Audio("sounds/e.mp3");
            ee.play()            
            document.getElementById("kidzee").innerHTML="E for Elephant" 
            break;

        case "f":
            var ff= new Audio("sounds/f.mp3");
            ff.play()            
            document.getElementById("kidzee").innerHTML="F for Father" 
            break;

        case "F":
            var ff= new Audio("sounds/f.mp3");
            ff.play()            
            document.getElementById("kidzee").innerHTML="F for Father" 
            break;

        case "g":
            var gg= new Audio("sounds/g.mp3");
            gg.play()            
            document.getElementById("kidzee").innerHTML="G for GrandFather" 
            break;

        case "G":
            var gg= new Audio("sounds/g.mp3");
            gg.play()            
            document.getElementById("kidzee").innerHTML="G for GrandFather" 
            break;

        case "h":
            var hh= new Audio("sounds/h.mp3");
            hh.play()            
            document.getElementById("kidzee").innerHTML="H for Hungary" 
            break;

        case "H":
            var hh= new Audio("sounds/h.mp3");
            hh.play()            
            document.getElementById("kidzee").innerHTML="H for Hungary" 
            break;

        case "i":
            var ii= new Audio("sounds/i.mp3");
            ii.play()            
            document.getElementById("kidzee").innerHTML="I for Internet" 
            break;

        case "I":
            var ii= new Audio("sounds/i.mp3");
            ii.play()            
            document.getElementById("kidzee").innerHTML="I for Internet" 
            break;

        case "j":
            var jj= new Audio("sounds/j.mp3");
            jj.play()            
            document.getElementById("kidzee").innerHTML="J for Justice" 
            break;

        case "J":
            var jj= new Audio("sounds/j.mp3");
            jj.play()            
            document.getElementById("kidzee").innerHTML="J for Justice" 
            break;

        case "k":
            var kk= new Audio("sounds/k.mp3");
            kk.play()            
            document.getElementById("kidzee").innerHTML="K for Kangaroo" 
            break;

        case "K":
            var kk= new Audio("sounds/k.mp3");
            kk.play()            
            document.getElementById("kidzee").innerHTML="K for Kangaroo" 
            break;

        case "l":
            var ll= new Audio("sounds/l.mp3");
            ll.play()            
            document.getElementById("kidzee").innerHTML="L for London" 
            break;

        case "L":
            var ll= new Audio("sounds/l.mp3");
            ll.play()            
            document.getElementById("kidzee").innerHTML="L for London" 
            break;

        case "m":
            var mm= new Audio("sounds/m.mp3");
            mm.play()            
            document.getElementById("kidzee").innerHTML="M for Monkey" 
            break;

        case "M":
            var mm= new Audio("sounds/m.mp3");
            mm.play()            
            document.getElementById("kidzee").innerHTML="M for Monkey" 
            break;

        case "n":
            var nn= new Audio("sounds/n.mp3");
            nn.play()            
            document.getElementById("kidzee").innerHTML="N for Norway" 
            break;

        case "N":
            var nn= new Audio("sounds/n.mp3");
            nn.play()            
            document.getElementById("kidzee").innerHTML="N for Norway" 
            break;

        case "o":
            var oo= new Audio("sounds/o.mp3");
            oo.play()            
            document.getElementById("kidzee").innerHTML="O for Overtime" 
            break;

        case "O":
            var oo= new Audio("sounds/o.mp3");
            oo.play()            
            document.getElementById("kidzee").innerHTML="O for Overtime" 
            break;

        case "p":
            var pp= new Audio("sounds/p.mp3");
            pp.play()            
            document.getElementById("kidzee").innerHTML="P for Pillow" 
            break;

        case "P":
            var pp= new Audio("sounds/p.mp3");
            pp.play()            
            document.getElementById("kidzee").innerHTML="P for Pillow" 
            break;

        case "q":
            var qq= new Audio("sounds/q.mp3");
            qq.play()            
            document.getElementById("kidzee").innerHTML="Q for Question" 
            break;

        case "Q":
            var qq= new Audio("sounds/q.mp3");
            qq.play()            
            document.getElementById("kidzee").innerHTML="Q for Question" 
            break;

        case "r":
            var rr= new Audio("sounds/r.mp3");
            rr.play()            
            document.getElementById("kidzee").innerHTML="R for Rabbit" 
            break;

        case "R":
            var rr= new Audio("sounds/r.mp3");
            rr.play()            
            document.getElementById("kidzee").innerHTML="R for Rabbit" 
            break;

        case "s":
            var ss= new Audio("sounds/s.mp3");
            ss.play()            
            document.getElementById("kidzee").innerHTML="S for Superman" 
            break;

        case "S":
            var ss= new Audio("sounds/s.mp3");
            ss.play()            
            document.getElementById("kidzee").innerHTML="S for Superman" 
            break;

        case "t":
            var tt= new Audio("sounds/t.mp3");
            tt.play()            
            document.getElementById("kidzee").innerHTML="T for Telephone" 
            break;

        case "T":
            var tt= new Audio("sounds/t.mp3");
            tt.play()            
            document.getElementById("kidzee").innerHTML="T for Telephone" 
            break;

        case "u":
            var uu= new Audio("sounds/u.mp3");
            uu.play()            
            document.getElementById("kidzee").innerHTML="U for Underwear" 
            break;

        case "U":
            var uu= new Audio("sounds/u.mp3");
            uu.play()            
            document.getElementById("kidzee").innerHTML="U for Underwear" 
            break;

        case "v":
            var vv= new Audio("sounds/v.mp3");
            vv.play()            
            document.getElementById("kidzee").innerHTML="V for Vaccinate" 
            break;

        case "V":
            var vv= new Audio("sounds/v.mp3");
            vv.play()            
            document.getElementById("kidzee").innerHTML="V for Vaccinate" 
            break;

        case "w":
            var ww= new Audio("sounds/w.mp3");
            ww.play()  
            document.getElementById("kidzee").innerHTML="W for World_Wide_Web"        
            break;

        case "W":
            var ww= new Audio("sounds/w.mp3");
            ww.play()  
            document.getElementById("kidzee").innerHTML="W for World_Wide_Web"        
            break;

        case "x":
            var xx= new Audio("sounds/x.mp3");
            xx.play()  
            document.getElementById("kidzee").innerHTML="X for Xylophone"           
            break;

        case "X":
            var xx= new Audio("sounds/x.mp3");
            xx.play()  
            document.getElementById("kidzee").innerHTML="X for Xylophone"           
            break;

        case "y":
            var yy= new Audio("sounds/y.mp3");
            yy.play()            
            document.getElementById("kidzee").innerHTML="Y for Yogurt" 
            break;

        case "Y":
            var yy= new Audio("sounds/y.mp3");
            yy.play()            
            document.getElementById("kidzee").innerHTML="Y for Yogurt" 
            break;

        case "z":
            var zz= new Audio("sounds/z.mp3");
            zz.play()            
            document.getElementById("kidzee").innerHTML="Z for Zebra" 
            break;

        case "Z":
            var zz= new Audio("sounds/z.mp3");
            zz.play()            
            document.getElementById("kidzee").innerHTML="Z for Zebra" 
            break;        
    
        default:
            break;
    }
}
// print 1000-1 . and after every 5 numbers it will print a new line
// 1000 999 998 997 996 
// 995 994 993 992 991 ............ ..
var s = "";
for(var i = 1000; i > 0; i--) {
    if(i !=1000 && i%5==0){
        s += "\n";
    }
    s += i + " ";  
    } 
    console.log(s);
    
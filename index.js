var lb1=label("label","for","fn","FirstName");
var li1=linbr("br");
var in1=input("input","type","text","id","fn");
var li2=linbr("br");


var lb2=label("label","for","mn","MiddleName");
var li3=linbr("br");
var in2=input("input","type","text","id","mn");
var li4=linbr("br");


var lb3=label("label","for","ln","LastName");
var li5=linbr("br");
var in3=input("input","type","text","id","ln");
var li6=linbr("br");


var lb4=label("label","for","eml","Email");
var li7=linbr("br");
var in4=input("input","type","email","id","eml");
var li8=linbr("br");


var lb5=label("label","for","cn","Contact");
var li9=linbr("br");
var in5=input("input","type","text","id","cn");
var li0=linbr("br");

document.body.append(lb1,li1,in1,li2,lb2,li3,in2,li4,lb3,li5,in3,li6,lb4,li7,in4,li8,lb5,li9,in5,li0)

function label(tagname,attrname,attrval,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrval);
    ele.innerHTML=content;
    return ele;
}
function input(tagname,attrname,attrval,attrname1,attrval1){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(attrname,attrval);
    ele1.setAttribute(attrname1,attrval1);
    return ele1;
}
function linbr(tagname){
    var ele2=document.createElement(tagname);
    return ele2;
}

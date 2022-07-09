var mouse_Event="empty";
var last_position_of_x, last_position_of_y;
canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color="input2";
var radius="input1";
var Width="input3";
canvas.addEventlistener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("input2").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    mouse_Event="mouseDown";
}
canvas.addEventlistener("mouseup",my_mouseup);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    mouse_Event="mouseUp";
}
canvas.addEventlistener("mouseleave",my_mouseleave);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    mouse_Event="mouseLeave";
}canvas.addEventlistener("mousedown",my_mousedown);
function my_mousemove(e)
{
    color=document.getElementById("input2").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    mouse_Event="mouseMove";
}
function my_mousemove(e)
{
    current_position_of_mouse_x=e.clientX=canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY=canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        console.log("Current position of x and y coordinates=");
        console.log("x = " + current_position_of_mouse_x + "y =" + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y,radius,0,2*Math.PI);
        ctx.stroke();
    }
}





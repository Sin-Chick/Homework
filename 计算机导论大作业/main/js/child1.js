{
    document.getElementById("ri").onmouseover = function()
    {
        document.getElementById("ro").classList.add("shining");
        document.getElementById("ri").innerHTML='返回';
    }
    document.getElementById("ri").onmouseout = function()
    {
        document.getElementById("ro").classList.remove("shining");
        document.getElementById("ri").innerHTML='返回';
    }
    document.getElementById("ri").onclick = function()
    {
        window.location.href="../main.html";
    }
}
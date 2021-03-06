var BotonesMenu = document.getElementById("BotonesMenu");
BotonesMenu.style.maxHeight= "0px";
function menutoggle() {
    if(BotonesMenu.style.maxHeight=="0px")
        {
            BotonesMenu.style.maxHeight="200px"
        }
        else
        {
            BotonesMenu.style.maxHeight="0px"
        }
}
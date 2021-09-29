var frikShown = false;
var krokShown = false;

function frikShow()
{
    if (frikShown == false)
    {
        document.getElementById("frikandel").style.display = "block";
        frikShown = true;
    }
    else if (frikShown == true)
    {
        document.getElementById("frikandel").style.display = "none";
        frikShown = false;
    }
}

function krokShow()
{
    if (krokShown == false)
    {
        document.getElementById("kroket").style.display = "block";
        krokShown = true;
    }
    else if (krokShown == true)
    {
        document.getElementById("kroket").style.display = "none";
        krokShown = false;
    }
}
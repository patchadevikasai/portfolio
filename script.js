const header = document.querySelector("header");

window.addEventListener("scroll",function()
{
    header.classList.toggle("sticky", window.scrollY > 120);
});

let boxes = document.querySelectorAll(".box");

window.onload = function()
{
    setTimeout(()=>
        {
            load_bars();
        },1000);
}

function load_bars()
{
    boxes.forEach(box =>
    {
        let line = box.querySelector(".line");
        let increasing_percentage = box.querySelector(".increasing-percentage");
        let total_percentage = box.querySelector(".total-percentage");

        let p=0;
        let my_interval = setInterval (() =>
            {
                p++;
                line.style.width = p +"%";
                increasing_percentage.innerHTML = p +"%";
                if(increasing_percentage.innerHTML == total_percentage.innerHTML)
                    {
                        clearInterval(my_interval);
                    }
            },25);
    });
}
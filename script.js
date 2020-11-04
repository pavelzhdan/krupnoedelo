"use strict"

jQuery('#datetimepicker').datetimepicker();

const menuButton = document.querySelector(".citeHeader_menuButton");

menuButton.addEventListener("click", () => {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
});

const priorityList = document.querySelector(".taskUrgencyFilter_header");

priorityList.addEventListener("click", () =>{
    priorityList.classList.toggle("closedFilter");
    const listItems = document.querySelectorAll(".taskUrgencyFilter_item");
    for(let i = 0; i <listItems.length; i++ ){
        listItems[i].classList.toggle("hide");
    }
})

const statusItems = document.querySelectorAll(".taskStatusFilter_item");

for(let i = 0; i < statusItems.length; i++) {
    statusItems[i].addEventListener("touchstart", () =>{
        statusItems[i].classList.toggle("taskStatusFilter_item__pressed");
    })
    statusItems[i].addEventListener("touchend", () =>{
        statusItems[i].classList.toggle("taskStatusFilter_item__pressed");
    })
}

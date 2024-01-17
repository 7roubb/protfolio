const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const DropDown = document.querySelector('.dropdown')
toggleBtn.onclick =function(){
    DropDown.classList.toggle('open')
    const isOpen =DropDown.classList.contains('open')
    toggleBtnIcon.classList=isOpen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}
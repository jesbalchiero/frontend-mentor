const titles = document.querySelectorAll(".title");

let current = false;

titles.forEach(title =>{
    title.addEventListener('click',function () {

        if (title.classList.contains('active')){
            title.classList.toggle('active')
        }
        else{
            titles.forEach(title => title.classList.remove('active'))
            title.classList.add('active')
        }
    })
})
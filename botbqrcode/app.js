const lookbook = document.querySelector('.lookbookbtn');
const imageHolder = document.querySelector('.layered-photos')
lookbook.addEventListener('click', showPhoto);

function showPhoto(){
    imageHolder.style.display = "unset";
}


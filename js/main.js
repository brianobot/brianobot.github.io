function show_darkscreen(){
    let dark_screen = document.getElementById('dark-screen');
    dark_screen.classList.remove('d-none');
    console.log(dark_screen.classList);
}

function close_darkscreen(){
    let dark_screen = document.getElementById('dark-screen');
    dark_screen.classList.add('d-none');
    console.log(dark_screen.classList)
}

function searchPage(query){
    find();
}
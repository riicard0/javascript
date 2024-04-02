//HERO
function escrevendoLetra(){
  
  function ativaLetra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += letra;
      }, 75 * i);
    })
  }
  
  const titulo = document.querySelector('.digitando');
  
  ativaLetra(titulo);
}

escrevendoLetra();

/* HAMBURGUER MENU LATERAL */

document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
)

// PROJECTS
const listAll = document.querySelectorAll('.projects_storage ul li');
const buttomGeral = document.querySelectorAll('.projects_models ul li');
const buttomAll = document.querySelectorAll('.projects_models .all');

listAll.forEach((img) => {
  img.classList.add('active');
})

listAll[0].classList.add('active');

function removeClick( index ){
  buttomGeral.forEach((item) => {
    item.classList.remove('.active');
  });
  buttomGeral[index].classList.add('.active');
}

buttomGeral.forEach((item, index) => {
  item.addEventListener('click', () => {
    removeClick(index);
  });
});

function showList(list, buttom = "all"){
  list.forEach((item) => {
    item.classList.remove('active');
  });
  if(buttom == 'design'){
    list[0].classList.add('active');    
    list[1].classList.add('active');
  }
  if(buttom == 'app_project'){
    list[2].classList.add('active');
  }
  if(buttom == 'webSite'){
    list[3].classList.add('active');
    list[4].classList.add('active');
    list[5].classList.add('active');
    list[6].classList.add('active');
    list[7].classList.add('active');
  }
  if(buttom == 'all'){
    list[0].classList.add('active');
    list[1].classList.add('active');
    list[2].classList.add('active');
    list[3].classList.add('active');
    list[4].classList.add('active');
    list[5].classList.add('active');
    list[6].classList.add('active');
    list[7].classList.add('active');
  }
}

buttomGeral.forEach((item) => {
  item.addEventListener('click', (e) => {
    let currentButtom = e.target;

    if(currentButtom.classList.contains('all')){
      showList(listAll);
    }
    if(currentButtom.classList.contains('design')){
      showList(listAll, "design")
    }
    if(currentButtom.classList.contains('app_project')){
      showList(listAll, "app_project")
    }
    if(currentButtom.classList.contains('webSite')){
      showList(listAll, "webSite")
    }
    if(currentButtom.classList.contains('all')){
      showList(listAll, "all")
    }
  })
})

//PROFESSIONAL

let count = 1;
document.getElementById("xp1").checked = true;
document.getElementById("ed1").checked = true;

setInterval( function(){
  nextText();
}, 3000);

function nextText(){
  count++;
  if( count > 10 ){
    count = 1;
  }

  if( count <= 5 ){
    document.getElementById("xp"+count).checked = true;
  } else if( count > 5 && count <= 10 ){
    document.getElementById("ed"+(count-5)).checked = true;
  }
}
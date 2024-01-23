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

// RESUME
function sobreMim(){

  const divExperience = document.querySelectorAll('.experience_content div');
  const liExperience = document.querySelectorAll('.experience_content ul li');

  const divEducation = document.querySelectorAll('.education_content div');
  const liEducation = document.querySelectorAll('.education_content ul li');

  divExperience[0].classList.add('ativo');
  liExperience[0].classList.add('ativo');
  divEducation[0].classList.add('ativo');
  liEducation[0].classList.add('ativo');

  function slideShow( index ){
    divExperience.forEach((div) => {
      div.classList.remove('ativo');
    });
    liExperience.forEach((botao) => {
      botao.classList.remove('ativo');
    });

    divExperience[index].classList.add('ativo');
    liExperience[index].classList.add('ativo');
  }

  function slideShow2( index ){
    divEducation.forEach((div) => {
      div.classList.remove('ativo');
    });
    liEducation.forEach((botao) => {
      botao.classList.remove('ativo');
    });

    divEducation[index].classList.add('ativo');
    liEducation[index].classList.add('ativo');
  }

  liExperience.forEach((event, index) => {
    event.addEventListener('click', () => {
      slideShow(index)
    });
  });

  liEducation.forEach((event, index) => {
    event.addEventListener('click', () => {
      slideShow2(index)
    });
  });

}

sobreMim();

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
    list[3].classList.add('active');
  }
  if(buttom == 'webSite'){
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
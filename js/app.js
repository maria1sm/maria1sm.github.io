//1

const body = document.querySelector('body');

document.getElementById('btnswitch').addEventListener('click',()=>{
        document.documentElement.setAttribute('data-bs-theme','dark')
        body.setAttribute('class','theme-dark');
})
document.getElementById('btnswitch2').addEventListener('click',()=>{
        document.documentElement.setAttribute('data-bs-theme','light')
        body.setAttribute('class','theme-light');
})

document.getElementById('btnswitch3').addEventListener('click',()=>{
        document.documentElement.setAttribute('data-bs-theme','light')
        body.className = 'gris';
})

//2

function filter(c) {
        let x, i;
        x = document.getElementsByClassName("filterDiv");
        if (c == "all-btn") {
                c = "";
        }
        for (i = 0; i < x.length; i++) {
          AddClass(x[i], "hide");
          if (x[i].className.indexOf(c) > -1) RemoveClass(x[i], "hide");
        }
      }

function AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}      

function RemoveClass(element, name) {
        let i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
          }
        }
        element.className = arr1.join(" ");
      }

const btnContainer = document.querySelector('.boton__container');
const btns = document.querySelectorAll('.boton');
btns.forEach(btn => {
        btn.addEventListener('click', () => {
          btns.forEach(b => b.classList.toggle('color', b === btn));
        });
      });


//3
const asunto = document.querySelector('#subject');
const correo = document.querySelector('#cc');
const mensaje = document.querySelector('#body');


asunto.addEventListener('blur', () => {
  if (asunto.value.trim() === '') {
    asunto.style.border = '2px solid red';

    let errorText = asunto.parentNode.querySelector('span');
    if (!errorText) {
      errorText = document.createElement('span');
      errorText.style.color = 'red';
      asunto.parentNode.appendChild(errorText);
    }
    errorText.innerText = 'Este campo no puede estar vacío';
  } else {
    asunto.style.border = '2px solid green';
    const errorText = asunto.parentNode.querySelector('span');
    if (errorText) {
      errorText.remove();
    }
  }
});

correo.addEventListener('blur', () => {
  const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  if (correo.value.trim() === '' || !pattern.test(correo.value.trim())) {
    correo.style.border = '2px solid red';

    let errorText = correo.parentNode.querySelector('span');
    if (!errorText) {
      errorText = document.createElement('span');
      errorText.style.color = 'red';
      correo.parentNode.appendChild(errorText);
    }
    errorText.innerText = 'Introduce un correo electrónico válido';
  } else {
    correo.style.border = '2px solid green';

    const errorText = correo.parentNode.querySelector('span');
    if (errorText) {
      errorText.remove();
    }
  }
});

mensaje.addEventListener('blur', () => {
  if (mensaje.value.trim() === '') {
    mensaje.style.border = '2px solid red';

    let errorText = mensaje.parentNode.querySelector('span');
    if (!errorText) {
      errorText = document.createElement('span');
      errorText.style.color = 'red';
      mensaje.parentNode.appendChild(errorText);
    }
    errorText.innerText = 'Este campo no puede estar vacío';
  } else {
    mensaje.style.border = '';
    const errorText = mensaje.parentNode.querySelector('span');
    if (errorText) {
      errorText.remove();
    }
  }
});

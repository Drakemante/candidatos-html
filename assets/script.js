const candidatos = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6VQEZMN6YGnUmLVq-hiItEKzKWnWv_mdY7VLC7q3AoCKOy_xuZi4mfrC6xFwW5VKsyM&usqp=CAU"
        name: "Drakemante",
        profession: "Cartógrafo",
        birth: "18/03/1999",
        phone: "(27) 99774-4787",
        email: "samoelcostaviza@gmail.com"
    },
    {
        image: "https://static.wikia.nocookie.net/tsrd/images/f/fb/Descendentes_Drac%C3%B4nicos.jpg/revision/latest?cb=20190929050709&path-prefix=pt-br",
        name: "Kay",
        profession: "Ferreiro/Lenhador",
        birth: "10/03/2003",
        phone: "(27) 99950-2971",
        email: "dedekaizer06@gmail.com"
    },
    {
        image: "https://avatars.githubusercontent.com/u/109319609?v=4",
        name: "Klod",
        profession: "Domestico",
        birth: "20/03/2005",
        phone: "(27) 99507-9939",
        email: "srjamesbr@gmail.com"
    }
];

const image = document.querySelector("img")
const nome = document.querySelector("#nome");
const profissao = document.querySelector("#profissao");
const nascimento = document.querySelector("#nascimento");
const telefone = document.querySelector("#telefone");
const email = document.querySelector("#email");
const modalNewCandidato = document.querySelector("#modal");
const overflow = document.querySelector("#overflow");

const inputImage = document.querySelector("#input-image");
const inputName = document.querySelector("#input-name");
const inputProfession = document.querySelector("#input-profission");
const inputDate = document.querySelector("#input-date");
const inputTel = document.querySelector("#input-tel");
const inputMail = document.querySelector("#input-mail");




let choice = 0

function changePerfil(indice) {

    image.src = candidatos[indice].image
    nome.innerText = candidatos[indice].name
    profissao.innerText = candidatos[indice].profession
    nascimento.innerText = candidatos[indice].birth
    telefone.innerText = candidatos[indice].phone
    email.innerText = candidatos[indice].email
}

function nextPerfil() {
    if (choice === candidatos.length - 1) {
        choice = 0
    } else {
        choice++
    }
    changePerfil(choice)
}

function beforePerfil() {
    if (choice === 0) {
        choice = candidatos.length - 1
    } else {
        choice--
    }
    changePerfil(choice)
}
function closeModal() {
    modalNewCandidato.style.display = "none";
    overflow.style.display = "none";
}

function openModal() {
    modalNewCandidato.style.display = "block";
    overflow.style.display = "block";
}

function addNewCandidato() {
    const addNewCandidato = {

        image: inputImage.value,
        name: inputName.value,
        profession: inputProfession.value,
        birth: inputDate.value,
        phone: inputTel.value,
        email: inputMail.value
    }
    candidatos.push(addNewCandidato);

    closeModal()
}

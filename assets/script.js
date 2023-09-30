const candidatos = [
    {
        image: "data:image/jpeg;base64,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",
        name: "João Paulo",
        profession: "Agricultor",
        birth: "14/09/1968",
        phone: "(28) 99687-5589",
        email: "jaop@gmail.com"
    },
    {
        image: "https://avatars.githubusercontent.com/u/100161372?v=4",
        name: "Dener Batista",
        profession: "Desenvolvedor Full Stack",
        birth: "02/07/1996",
        phone: "(27) 998079104",
        email: "dbatista@findes.org.br"
    },
    {
        image: "https://avatars.githubusercontent.com/u/109319609?v=4",
        name: "Camila Ferraz",
        profession: "Reporter",
        birth: "02/08/2000",
        phone: "(11) 99524-5247",
        email: "ferriska@outlook.com"
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
    modalNewCandidato.style.display ="none";
    overflow.style.display = "none";
}

function openModal() {
    modalNewCandidato.style.display = "block";
    overflow.style.display = "block";
}

function addNewCandidato (){
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
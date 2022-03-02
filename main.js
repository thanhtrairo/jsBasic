// bai1
const $ = document.querySelector.bind(document)

function js_style() {
    $('#text').classList.toggle('changeFont-color')
}

// bai2

const theA = $('#w3r')

const atributes =
`
href: ${theA.href}
id: ${theA.id}
type: ${theA.type}
hreflang: ${theA.hreflang}
rel: ${theA.rel}
target: ${theA.target}
content: ${theA.innerText}
`
function getAttributes() {
    alert(atributes)
}


// bai3
let a = 3
let b = 3
function insert_Row() {
    const table = $('#sampleTable')
    const createTr = document.createElement('tr')
    createTr.innerHTML = `<tr><td>Row${a++} cell1</td>Row${b++} cell2<td/></tr>`
    table.appendChild(createTr)
}

// bai4,5,6
const input = $('#txtInput')

function Sort() {
    if(!input.value) {
        $('#Error').innerText = "Vui lòng nhập tên"
    }
    else {
        $('#Error').innerText = ""
        const Arrcharacters = input.value.split('')
        Arrcharacters.sort()
        input.value = Arrcharacters.join('')
    }
}

function toUpperCase() {
    const separateWord = input.value.toLowerCase().split(' ')
    for (var i = 0; i < separateWord.length; i++) {
       separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
       separateWord[i].substring(1)
    }
    input.value = separateWord.join(' ')
}

function longest() {
    const separateWord = input.value.toLowerCase().split(' ')
    let maxLength = ""
    for (var i = 0; i < separateWord.length; i++) {
       if(separateWord[i].length > maxLength.length) {
        maxLength = separateWord[i]
       }
    }
    $('#maxLength').innerText = maxLength
}

var cmbInitials = document.getElementById('states');

cmbInitials.onchange = changeFlag;

function changeFlag() {
    var flag;
    var state;
    var div = document.querySelector('.modal');
    var initials = cmbInitials.options[cmbInitials.selectedIndex].value;
    
    //Check if already has an img to remove when change.
    var hasImg = document.getElementById('img');

    if (hasImg) {
        div.removeChild(document.getElementById('img'));
        div.removeChild(document.querySelector('p'));
    }

    switch (initials) {
        case 'sc':
            state = 'Santa Catarina';
            flag = 'flags/SC.png';
            break;

        case 'rs':
            state = 'Rio Grande do Sul';
            flag = 'flags/RS.jpg';
        break;   

            case 'pr':
                state = 'Paraná';
                flag = 'flags/PR.png';
        break;
    }

    if (state != undefined) {
        var paragraph = document.createElement('p');
        var imagem = document.createElement('img');

        imagem.setAttribute('src', flag);  
        imagem.setAttribute('id', 'img');

        paragraph.innerText = state;

        div.appendChild(paragraph);
        div.appendChild(imagem);
    }
}

function fiveParagraphs() {

    // Навешиваем событие на загрузку страницы
    /*
    document.addEventListener('DOMContentLoaded', function() {
    const myElement = document.querySelector('.button');
    myElement.hidden = true;
    });
    */
    document.addEventListener('DOMContentLoaded', buttonDesappear);

    function buttonDesappear () {
    
        const myElement = document.querySelector('.button');
        myElement.hidden = true;

        return myElement.hidden;
    }

    // Навешиваем событие на изменение поля ввода
    const text = document.querySelector('.text');
    text.addEventListener('change', buttonAppear);

    // Навешиваем событие на нажатие кнопки
    const button = document.querySelector('.button');
    button.addEventListener('click', pushTheButton);



    function buttonAppear() {
        const myButton = document.querySelector('.button');
        myButton.hidden = false;

        const text = document.querySelector('.text');
        //console.log(text.value);
        //console.log(text.value.length);

        if (text.value.length > 0) {
            myButton.hidden = false;
        } else {
            myButton.hidden = true;
        }
    }

    function pushTheButton() {

        const text = document.querySelector('.text');
        const newElement = document.createElement('p');
        newElement.textContent = text.value;
        newElement.classList.add('paragraf'); // Присвоили новому элементу свойства класса "paragraf"

        const divEl = document.querySelector('.groupOfElements')
        divEl.append(newElement); // Добавили созданный элемент в конец

        const allElements = document.querySelectorAll('.paragraf')
        //console.log(allElements.length);

        if (allElements.length > 5) {
            allElements.item(0).remove();
        }
        
    }
}


fiveParagraphs ();



import React from 'react';
import * as ReactDOMClient from 'react-dom/client';



/* ReactDOMClient.createRoot(    //Вывод текста в блок с помощью команды
    <div>
        <h1>Hi</h1>
        <h2> Hello </h2>
    </div>,
    document.getElementById('app'))

ReactDOMClient.createRoot(React.createElement('input', {  //Вывод сообщения при наведении и нажатии на поле в консоль
    placeholder: 'Help text',
    onClick: () => console.log("Clicked"),
    onMouseEnter: () => console.log("Mouse over")
}), document.getElementById('app1'))

ReactDOMClient.createRoot(<input placeholder='Help text' />, document.getElementById('app2')) //Более удобный формат вывода

*/



//Функции для будущего использования (пишут всякое в консоль)
const inputClick = () => console.log("Clickeddd")
const mouseOver = () => console.log("Mouse Overrr")

const helpText = "Help text bebriki"


// Ещё один формат вывода с помощью констанит
const elements = (
    <div className="elements">
        <h1> Elements </h1>
        <input placeholder={helpText} onClick={inputClick} onMouseEnter={mouseOver} /> //Создание констатны элемента input, вополняющую функцию inputClick при клике и mjuseOver при наведении
        <p> {helpText === "Help text bebriki" ? "Yes" : "No"}</p>    //Условие: если helpText = "Help text bebriki", вывести yes, если нет, то no
    </div>
)
const app = ReactDOMClient.createRoot(document.getElementById("app3"))

app.render(elements)



//компоненты и их возможности
function AppFunction() {
    return (<div className="function">
        <h1> Function </h1>
        <input placeholder={helpText} onClick={inputClick} onMouseEnter={mouseOver} /> //Создание констатны элемента input, вополняющую функцию inputClick при клике и mjuseOver при наведении
        <p> {helpText === "Help text bebriki" ? "Yes" : "No"}</p>    //Условие: если helpText = "Help text bebriki", вывести yes, если нет, то no
    </div>);
}

const app4 = ReactDOMClient.createRoot(document.getElementById("app4"))

app4.render(<AppFunction />)


// ----------- Вывод функции внутри другой функции ----------
function AppFunction2() {
    return (<div className="function">
        <h1> Function inside function </h1>
        <Header />
        <Header />  // Функция header внутри функции AppFunction2
        <Header />
        <input placeholder={helpText} onClick={inputClick} onMouseEnter={mouseOver} /> //Создание констатны элемента input, вополняющую функцию inputClick при клике и mjuseOver при наведении
        <p> {helpText === "Help text bebriki" ? "Yes" : "No"}</p>    //Условие: если helpText = "Help text bebriki", вывести yes, если нет, то no
    </div>);
}

// блоее новый и правильный метод вывода функции
class Header extends React.Component {
    render() {
        return (
            <header> Шапка Сайта !!</header>
        )
    }
}

const app5 = ReactDOMClient.createRoot(document.getElementById("app5"))

app5.render(<AppFunction2 />)




import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(    //Вывод текста в блок с помощью команды
    <div>
        <h1>Hi</h1>
        <h2> Hello </h2>
    </div>,
    document.getElementById('app'))

ReactDOM.render(React.createElement('input', {  //Вывод сообщения при наведении и нажатии на поле в консоль
    placeholder: 'Help text',
    onClick: () => console.log("Clicked"),
    onMouseEnter: () => console.log("Mouse over")
}), document.getElementById('app1'))

ReactDOM.render(<input placeholder='Help text' />, document.getElementById('app2')) //Более удобный формат вывода





//Функции для будущего использования (пишут всякое в консоль)
const inputClick = () => console.log("Clickeddd")
const mouseOver = () => console.log("Mouse Overrr")

const helpText = "Help text bebriki"


// Ещё один формат вывода с помощью констанит
const elements = (
    <div className="elements">
        <h1> Elements </h1>
        <input placeholder={helpText} onClick={inputClick} onMouseEnter={mouseOver} /> //Создание констатны элемента input, вополняющую функцию inputClick при клике и mjuseOver при наведении
        <p> {helpText == "Help text bebriki" ? "Yes" : "No"}</p>    //Условие: если helpText = "Help text bebriki", вывести yes, если нет, то no
    </div>
)
const app = document.getElementById("app3")

ReactDOM.render(elements, app)





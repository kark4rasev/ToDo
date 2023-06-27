import React, { Component }  from 'react';
import './App.css';
import ToDoItem from './ToDoItem/ToDoItem.js';
import todosData from './ToDoItem/todosData';

class App extends Component  {                                    // тудуайтем это шаблон прокинутый из одноименного файла ,   объявляем конструктор что бы создать из класса объект, с помощью супер описываем методы 
  constructor (){                                                 
      super(); 
        this.state = {
          todoItems:todosData
        }                                                           // обращаемся к объекту который есть у класса компонент через стейт
  }

  handleChange = id => {
    const index = this.state.todoItems.map(item => item.id).indexOf(id);      // получаем айдишник перебором мап и прокидываем в метод индекс оф                     // вешаем обработчик события извеающий о том что значение поменялось функция принимает какое то значение
    this.setState (state =>{
        let {todoItems} = state;
        todoItems[index].completed = true; // если что то изменилось то меняем стейт у того объекта который находится внутри массива
        return todoItems; 
    })                                                                        // меняем стейт состояние стрелочной функцией теперь при нажатии выполнено отмеченный пункт уходит в конец списка 
  }

  render () {
    const {todoItems} = this.state;                                             // это значит что вутри масси и мы можем его использовать
    const activeTasks = todoItems.filter(task => task.completed === false);    // если в комплитете что то поменялось на фолс будет актив таскс
    const completedTasks = todoItems.filter (task => task.completed === true);  //   если в комплитете что то поменялось на тру будет комплетед таскс                                               
    const finalTasks = [...activeTasks,...completedTasks].map(item => {         // с помощью спредоператоров формируем новы объект                            // переменная в которой будут храниться выполненые задачи
      return(                                                                 // пробегаемся мапом по нашему массиву и прокидываем данные в компонент тудуайтем   и выводим их               
        <ToDoItem
            key = {item.id}
            description = {item.description}                                 // пробрасываем значения выполненно не выполнено
            completed = {item.completed} 
            handleChange = {() => {this.handleChange(item.id)}}             // прокидываем айдишник в нашем объекте
        /> 
      )
    }) 
    
    return (                                                              // ПРОКИДЫВАЕМ НАШ ТУДУАЙТЕМС 
      <div className="App">
        <h1 className = "title">Какие планы на день?</h1>
        <h2 className="titleBlock">Задачи </h2>    
        {finalTasks}               
      </div>
    );
  }
  
}

export default App;

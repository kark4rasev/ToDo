Название проекта: #ToDo

Краткое описание: Данный учебный проект предназначен для составления списка дел с последующей отметкой об их выполнении 

Прект собран с использованием Java script, React, проект был загружен с помощью [Create React App]

Создаем тудуайтем это шаблон прокинутый из одноименного файла ,   
объявляем конструктор что бы создать из класса объект, с помощью супер и описываем методы 
обращаемся к объекту который есть у класса компонент через стейт получаем айдишник перебором мап и прокидываем в метод индекс оф   
вешаем обработчик события извеающий о том что значение поменялось функция принимает какое то значение
если что то изменилось то меняем стейт у того объекта который находится внутри массива
Далее меняем стейт состояние стрелочной функцией теперь при нажатии выполнено отмеченный пункт уходит в конец списка 
Создаем activeTasks и completedTasks 
если в комплитете что то поменялось на фолс будет activeTasks
если в комплитете что то поменялось на тру будет completedTasks
с помощью спредоператоров формируем новы объект finalTasks переменная в которой будут храниться выполненые задачи
Далее пробегаемся мапом по нашему массиву и прокидываем данные в компонент тудуайтем   и выводим их               
Далее пробрасываем значения description completed
прокидываем айдишник в нашем объекте
Далее прокидываем наш todoItems

Настройка проекта npm install, npm start


Project name: #ToDo

Brief description: This training project is designed to compile a to-do list followed by a note about their implementation

The project was built using Java script, React, the project was uploaded using [Create React App]

Creating a tuduaytem is a template thrown from the file of the same name,
declaring a constructor to create an object from the class, using super and describing methods, we turn to the object that the class has a component through the state, we get an idishnik by iterating through the map and we throw an index of the method
, we hang an event handler saying that the value has changed the function takes some value if that that has changed, then we change the state of the object that is inside the array, Then we change the state state with the arrow function now when you click done, the marked item goes to the end of the list, Create activeTasks and completedTasks if something has changed in the complement to falls, there will be activeTasks if something has changed in the complement to true, there will be completedTasks with with the help of spread operators, we form a new finalTasks object, a variable in which the completed tasks will be stored, Then we run through our array with a map and throw the data into the tuduaytem component and output them, Then we throw the values of description completed, we throw the ID in our object
Next, we throw our TodoItems

Project setup npm install, npm start


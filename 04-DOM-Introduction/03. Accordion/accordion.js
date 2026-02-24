function toggle() {
    let extraDiv = document.getElementById('extra');
    let button = document.getElementsByClassName('button')[0];

    if (extraDiv.style.display === 'block') {
        extraDiv.style.display = 'none';
        button.textContent = 'More';
    } else {
        extraDiv.style.display = 'block';
        button.textContent = 'Less';
    }
}



/* 

function toggle() {
    // 1. Находим скрытый блок с текстом по его ID "extra"
    var extraDiv = document.getElementById('extra');
    
    // 2. Находим кнопку. В задании сказано использовать getElementsByClassName.
    // Так как этот метод возвращает коллекцию (список), берем первый элемент [0].
    var button = document.getElementsByClassName('button')[0];

    // 3. Проверяем текущее состояние блока (скрыт он или показан)
    // Если стиль display равен 'block', значит текст сейчас виден -> нужно скрыть
    if (extraDiv.style.display === 'block') {
        extraDiv.style.display = 'none'; // Скрываем блок
        button.textContent = 'More';     // Меняем надпись на "More"
    } 
    // Иначе (если он скрыт или стиль еще не задан) -> нужно показать
    else {
        extraDiv.style.display = 'block'; // Показываем блок
        button.textContent = 'Less';      // Меняем надпись на "Less"
    }
} */
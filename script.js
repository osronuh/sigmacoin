document.addEventListener("DOMContentLoaded", function() {
    // Получаем сохраненное значение счетчика из локального хранилища, если оно есть
    var clickCount = parseInt(localStorage.getItem("clickCount")) || 0;
    var clickableImage = document.getElementById("clickableImage");
    var clicksDisplay = document.getElementById("clicks");
    let buffer = parseInt(localStorage.getItem("buffer"));

    // Устанавливаем начальное значение счетчика на странице
    clicksDisplay.textContent = clickCount;

    clickableImage.addEventListener("click", function() {
        clickCount += buffer;
        clicksDisplay.textContent = clickCount;
        
        // Сохраняем текущее значение счетчика в локальное хранилище
        localStorage.setItem("clickCount", clickCount);
    });
    resetButton.addEventListener("click", function() {
        clickCount = 0; // Сбрасываем счетчик
        buffer = 1;
        clicksDisplay.textContent = clickCount;
        localStorage.setItem("buffer", buffer);
        localStorage.setItem("clickCount", clickCount.toString);
    });
    var buffx2 = document.getElementById("buffx2");
    buffx2.addEventListener("click", function() {
      if (clickCount >= 100000){
      buffer += 1; // Увеличиваем значение переменной buffer на 1
      clickCount = clickCount - 100000;
      localStorage.setItem("buffer", buffer);
      }
      else{

      }
  });

});

var img = document.getElementById("myImg");

// Находим элемент модального окна
var modal = document.getElementById("myModal");

// Находим кнопку закрытия модального окна
var closeBtn = document.getElementsByClassName("close")[0];

// При клике на картинку открытия модального окна, отображаем модальное окно
img.onclick = function() {
  modal.style.display = "block";
}

// При клике на кнопку закрытия, скрываем модальное окно
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// При клике вне модального окна, скрываем его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

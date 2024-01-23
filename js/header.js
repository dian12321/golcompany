$(function () {
    $(".hamBtn").on("click", function () {
        $("#myNav,  .momenuoveray").fadeToggle(); 
        // .fadeToggle() - (hidden 상태인지) 여부에 따라 fadeIn() 또는 fadeOut()를 자동으로 선택하여 실행
    });

    $(".closeBtn").on("click", function () {
        $("#myNav,  .momenuoveray").fadeOut();
    });
});
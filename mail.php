<?php
// Проверяем, что к файлу обратились через метод POST формы
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // ВПИШИТЕ СЮДА ВАШУ ПОЧТУ, куда должны приходить заявки:
    $to = "your-email@yandex.ru"; 
    
    // Тема письма
    $subject = "Заявка с сайта: Расчет строительного калькулятора";

    // Безопасно очищаем полученные текстовые данные от спама
    $name = htmlspecialchars(trim($_POST['user_name']));
    $phone = htmlspecialchars(trim($_POST['user_phone']));
    $type = htmlspecialchars(trim($_POST['building_type']));
    $area = htmlspecialchars(trim($_POST['area']));
    $extras = htmlspecialchars(trim($_POST['extras']));
    $price = htmlspecialchars(trim($_POST['total_price']));

    // Формируем красивый текст письма в формате HTML
    $message = "
    <h2>Новая заявка на расчет стоимости проекта</h2>
    <p><b>Имя клиента:</b> $name </p>
    <p><b>Телефон:</b> $phone </p>
    <hr>
    <h3>Выбранные параметры в калькуляторе:</h3>
    <p><b>Тип строения:</b> $type </p>
    <p><b>Желаемая площадь:</b> $area </p>
    <p><b>Дополнительные пристройки:</b> $extras </p>
    <p><b>Предварительный расчет (стоимость):</b> <span style='color:#38a169; font-weight:bold; font-size:18px;'>$price</span></p>
    ";

    // Устанавливаем заголовки, чтобы письмо отправлялось в кодировке UTF-8 (без кракозябр) и распознавалось как HTML
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Калькулятор Сайта <noreply@yourdomain.com>" . "\r\n";

    // Отправляем письмо через системную функцию хостинга
    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200); // Код успеха для JavaScript
    } else {
        http_response_code(500); // Код ошибки сервера
    }
} else {
    http_response_code(403); // Запрет прямого перехода по ссылке mail.php
}
?>

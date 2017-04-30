<?php
$text = $_POST['text'];
$fp = fopen("log.html", 'a');
fwrite($fp, "<div class='msgln'><p>".stripslashes(htmlspecialchars($text))."<br></div>");
fclose($fp);
?>
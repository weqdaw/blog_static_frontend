<?php
$file = 'a.txt';
if (file_exists($file)) {
    $messages = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    echo json_encode($messages);
} else {
    echo json_encode([]);
}
?>

<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $message = trim($_POST['message']);
    if (!empty($message)) {
        $file = 'a.txt';
        $currentMessages = file_get_contents($file);
        $currentMessages .= $message . "\n";
        file_put_contents($file, $currentMessages);
        echo '留言已保存';
    } else {
        echo '留言不能为空';
    }
}
?>

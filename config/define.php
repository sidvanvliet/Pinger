<?php

session_start();
$_SESSION['csrf_token'] = base64_encode(openssl_random_pseudo_bytes(32));

require('config.php');

foreach($settings as $key => $setting)
{
    $key = strtoupper($key);
    $setting = strip_tags($setting);
    
    define($key, $setting);
}
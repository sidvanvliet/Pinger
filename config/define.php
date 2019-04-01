<?php

require('config.php');

foreach($settings as $key => $setting)
{
    $key = strtoupper($key);
    $setting = strip_tags($setting);
    
    define($key, $setting);
}
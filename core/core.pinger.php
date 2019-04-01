<?php

require('../config/define.php');

if( isset($_GET['status'] ))
{
    if( !file_exists('latest.dat') ){
        echo "not-yet-ran";
    } else {
        echo file_get_contents("latest.dat");
    }
    exit();
}

// Exit if there's not even anything provided.
if( !isset($_GET['token']) || $_GET['token'] !== TOKEN )
{
    echo "Disallowed";
    exit();
}

// A ping was received with the correct token!
if( !file_exists('latest.dat') )
{
    generateDatFile();
    putPing();
} else {
    putPing();
}

// Put the 'Ping' into the latest.dat file
function putPing(){
    $latest = fopen('latest.dat', 'w');
    if($latest)
    {
        fwrite($latest, date("Y-m-d H:i:s"));
        echo "OK";
    } else {
        echo "Unable to write..";
    }
}

// Generate the latest.dat file
function generateDatFile(){
    if( fopen("latest.dat", "w") )
    {
        return true;
    }
    return false;
}
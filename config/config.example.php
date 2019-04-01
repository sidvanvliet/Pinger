<?php

if (isset($_SESSION['csrf_token'])) {
    session_unset('csrf_token');

    # Pingui Configuration
    $settings = array(

        # A name that defines your server/host (for example: Media Server-1 or Google)
        'name'      => 'My Server',

        # This is the token that the server will use as basic authentication (please use a secure token from https://www.grc.com/passwords.htm)
        'token'     => '',

        # Wether or not we should use Content Delivery Networks (recommend: true)
        'useCdn'    => true,

        # Adds a link to the repository (I understand if you want to disable this)
        'gitlink'   => true

    );

} else {
    echo "Disallow";
    exit();
}
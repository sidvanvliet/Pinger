<p align="center">
  <a href="https://github.com/sidvanvliet/Pingui/">
    <img src="https://i.imgur.com/l4Do6a5.png" alt="Yosemite UI logo" width="75" height="75">
  </a>
  
  <h3 align="center">Pingui</h3>
  <p align="center">
    A super easy-to-use server pinger app!
  </p>
</p>

# Requirements
A web server with <a href="https://www.php.net/">PHP</a> and a server that can run <a href="https://nodejs.org/">Node.js</a>

# Installation
1. <a href="https://github.com/sidvanvliet/Pingui/archive/master.zip">Download</a> this repository and unzip the files in your web server's web folder.


2. Generate a safe token on <a href="https://www.grc.com/passwords.htm">https://www.grc.com/passwords.htm</a> and paste that in your `config/config.php` file and into `server/env.js`.

3. Copy the contents of the `server` folder onto your host / server (the machine that will ping to Pingui)

4. Edit `server/env.js` to make sure the Pingui url is correct (for example: http://localhost/Pingui/core/pingui.core.php)

5. Run the `pingui.js` script on that host / server (I recommend using Forever.js / PM2 for this)

That's all! Pingui should do the rest for you and your status page should show "Up & running".

# Support
For support / questions, contact me at <a href="mailto:sid@vvliet.me">sid@vvliet.me</a>

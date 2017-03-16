# BennitAI_Server
This is a continuation of the BennitAI_backend_web. It aims to handle the new Early Access Program context. A new web UI will be developed here too.

this is the backend for the webapp as well as FB chatbot that is also currenly being extended to slack bot interface.

#how to install

'npm install'

#prerequesities for running Facebook bot.
1. Make a Facebook app under Facebook developers.
2. Get a Page acess token
3. Take note of app secret and app id.
4. Enter them under auth/config.js and config/fbbot_cred.js
(this will take care of all the dependencies)
#how to run
'node server.js'

#known issues
1. make sure you are not behind a proxy otherwise Google auth with node js causes trouble.
2. Don't try to build this repo currently for the webapp , currently the webapp is supported 
    by production ready repo, this is just the Mirror of actual production service.

 
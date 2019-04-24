# Running in Linux

1. Make sure you are in this location:
~~~~
/CookieArmy/identity_microservice  
~~~~
2. Run command:  
`pip install -r requirements.txt  `
3. Create a folder "configs" and then create a file "secret_keys.config" inside newly created folder configs.  
4. Add the 3 keys as referenced in "run.sh" into secret_keys.config in this format,  replacing the respective \"\<valueX\>\" with the actual data:  
~~~~
FN_CLIENT_ID=<value1>
FN_CLIENT_SECRET=<value2>
FN_FLASK_SECRET_KEY=<value3>
~~~~
4. Run command:  
`./run.sh  `
5. Navigate to below 3 urls to experience the OpenID Connect functionality:  
~~~~
localhost:8041  
localhost:8041/google/login  
localhost:8041/google/logout
~~~~



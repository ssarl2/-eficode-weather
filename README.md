## https://github.com/eficode/weatherapp
**[Docker Hub](https://hub.docker.com/repository/docker/ssarl2/myweatherapp)**
```
docker run -rm -it -p 8000:8000 -p 9000:9000 --name weather ssarl2/myweatherapp
```

* Use a private [openweathermap](http://openweathermap.org/) API key.
* Share my solution via github.
* Fix code which has some problems with any testing program. (tip: [mocha](https://mochajs.org/)).
* Write [ansible](http://docs.ansible.com/ansible/intro.html) playbooks for installing [docker](https://www.docker.com/) and the app itself.
* Use AWS Database.
* Use descriptive names and add comments in the code when necessary.
* Set up the weather service in a free cloud hosting service, e.g. [AWS](https://aws.amazon.com/free/) or [Google Cloud](https://cloud.google.com/free/).
* The app must be ready to deploy and work flawlessly.

-------------------------------------------------------------------

# OpenWeather
* Update my application every 10 minutes since the weather information will be updated in 10 minutes.
* Write Server domain rather than Server IP.
* What I call ID is better than calling name of city, zip code.
* Make sure that I should call API every 10 minutes. Because there are limits to call API with free accounts.
* It is recommended to save the previous data.

--------------------------------------------------------------------

# ESLint
* npm install -D or -g eslint
* ./node_modules/.bin/eslint **
* ./node_modules/.bin/eslint ** --fix
* Needs to set up the '.eslintrc' file

--------------------------------------------------------------------

__Backend__<br>
KoaJS
* Needs the 'koa-body' module to fetch data which is the location of users from frontend

__Frontend__<br>
React
* Needs to get geolocations 

--------------------------------------------------------------------

# Mocha
* ...

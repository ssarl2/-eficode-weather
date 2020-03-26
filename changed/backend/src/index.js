const debug = require('debug')('weathermap');

const Koa = require('koa');
const router = require('koa-router')();
const fetch = require('node-fetch');
const koaBody = require('koa-body'); // This module needs to get data with body.
const cors = require('kcors');

const appId = process.env.APPID || 'a227ab27a77fda78ed5f34e68001cbbd';
const mapURI = process.env.MAP_ENDPOINT || 'http://api.openweathermap.org/data/2.5';
// const targetCity = process.env.TARGET_CITY || 'Helsinki,fi';
let yourLat = process.env.LATITUDE || '60.169388';
let yourLon = process.env.LONGITUDE || '24.925810';

const port = process.env.PORT || 9000;

const app = new Koa();

app.use(cors());

const fetchWeather = async () => {
  // const endpoint = `${mapURI}/forecast?q=${targetCity}&appid=${appId}&`;
  const endpoint = `${mapURI}/forecast?lat=${yourLat}&lon=${yourLon}&appid=${appId}`;
  const response = await fetch(endpoint);

  return response ? response.json() : {};
};

router.get('/api/weather', async ctx => {
  const weatherData = await fetchWeather();

  ctx.type = 'application/json; charset=utf-8';
  ctx.body = weatherData.list ? weatherData.list : {};
});

// get data from frontend
router.post('/api/weather', koaBody(), async ctx => {
  yourLat = ctx.request.body.latitude;
  yourLon = ctx.request.body.longitude;
  ctx.body = ctx.request.body; // If there is no this method, this will send error responses to frontend.
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);

console.log(`App listening on port ${port}`);
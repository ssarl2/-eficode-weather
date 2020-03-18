#!/bin/bash

cd backend
npm install

node_modules/.bin/eslint src/index.js --fix

cd ../frontend
npm install

node_modules/.bin/eslint src/index.jsx webpack.config.js --fix
sed -i 's/0.0.0.0:9000/3.126.69.19:9000/' webpack.config.js

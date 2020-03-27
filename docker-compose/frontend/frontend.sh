#!/bin/bash

## Change frontend
cd frontend
npm install

# Eslint
node_modules/.bin/eslint src/index.jsx webpack.config.js --fix
sed -i 's/0.0.0.0:9000/3.126.69.19:9000/' webpack.config.js



## coding
cd ../
cp -r code/* ./frontend/
#!/bin/bash

## Change backend
cd eficode/backend
npm install
npm install koa-body
npm install mocha

# Eslint
node_modules/.bin/eslint src/index.js --fix

# Add an APIkey
sed -i "s/APPID || '';/APPID || 'a227ab27a77fda78ed5f34e68001cbbd';/g" src/index.js

sed -i 's/weather?/forecast?/' src/index.js
sed -i 's/\.weather/\.list/g' src/index.js
sed -i 's/\[0\]//' src/index.js

# Add scripts
sed -i '/scripts/a\    \"test\": \"node_modules\/.bin\/mocha\",' package.json
# Remove ^M at the end of the sentence
sed -i 's/\r//' package.json



## Change frontend
cd ../frontend
npm install

# Eslint
node_modules/.bin/eslint src/index.jsx webpack.config.js --fix
sed -i 's/0.0.0.0:9000/3.126.69.19:9000/' webpack.config.js



## coding
cd ../../
cp -r changed/backend/ changed/frontend/ ./eficode/

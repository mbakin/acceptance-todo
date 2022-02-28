FROM satantime/puppeteer-node
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn start
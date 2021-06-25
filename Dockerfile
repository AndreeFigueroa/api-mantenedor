FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod +x /app/start.sh

ENTRYPOINT ["/bin/bash", "/app/start.sh"]

FROM node:18-bullseye

WORKDIR /app

COPY package*.json ./

RUN apt-get update && apt-get install -y python3 g++ make \
    && npm install --build-from-source

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]

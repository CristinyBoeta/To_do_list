FROM node

WORKDIR /opt/docker_files/api_cobranca_mongodb

RUN /bin/sh -c "apt-get install bash"

COPY package*.json ./
RUN npm install -g npm && npm install
RUN npm i --save @nestjs/config

COPY . .

EXPOSE 3015

CMD ["npm", "start"]

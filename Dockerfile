FROM node:8.10-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 9000

CMD [ "npm", "start" ]

#sudo docker run -p 9001:3000 relateditems


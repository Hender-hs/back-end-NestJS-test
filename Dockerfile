FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive
#ENV MYSQL_ROOT_PASSWORD=""

RUN apt-get update && apt-get install -y curl gnupg2 && apt install net-tools
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get update && apt-get install -y nodejs

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@9.6.2
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:dev", ";", "netstat", "-l" ]

# CMD to build: docker build -t my-nest-app .
# CMD to run the container: docker run -p 3000:3000 -p 3306:3306 my-nest-app


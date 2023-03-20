FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive
#ENV MYSQL_ROOT_PASSWORD=""

RUN apt-get update && apt-get install -y curl gnupg2 && apt install net-tools
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get update && apt-get install -y nodejs

RUN apt-get update && \
    apt-get install -y postgresql-client

ENV POSTGRES_HOST=localhost
ENV POSTGRES_PORT=5432
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=mydatabase

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000 3306

CMD [ "npm", "run", "start:dev" ]

# CMD to build: docker build -t my-nest-app .
# CMD to run the container: docker run -p 3000:3000 -p 3306:3306 my-nest-app


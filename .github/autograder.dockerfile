FROM node:16

RUN apt-get update && apt-get install -y nginx
RUN npm install -g cypress

RUN adduser grader
RUN su grader
WORKDIR /home/grader
RUN mkdir actions-runner
WORKDIR /home/grader/actions-runner
RUN curl -O -L https://github.com/actions/runner/releases/download/v2.273.4/actions-runner-linux-x64-2.273.4.tar.gz
RUN tar xzf ./actions-runner-linux-x64-2.273.4.tar.gz 
RUN exit
WORKDIR /home/grader/actions-runner/
RUN bin/installdependencies.sh
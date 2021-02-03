## Description

Simple Nest JS application with Bull Jobs queue

Has one endpoint

```bash
POST /audio/transcode
```

which adds one job/message to audio queue and processes it. Also, in the end of processing adds one job/message to video queue.


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

NOTE: make sure Redis installed and running on your local machine.


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

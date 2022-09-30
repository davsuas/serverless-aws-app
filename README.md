# Serverless AWS App

This project was created with [Serverless Framework](https://www.serverless.com/), [AWS Lambda](https://docs.aws.amazon.com/es_es/lambda/latest/dg/lambda-nodejs.html), and [ReactJs Framework](https://reactjs.org/) to solve the [Thoughtfulautomation](https://thoughtfulautomation.notion.site/Full-Stack-Challenge-Serverless-AWS-App-c73f346b134948f1a578845fe4ab8ac0) Challenge


You need to deploy the solution using the latest version of the serverless framework.

Please provide an AWS IAM user credentials.
The IAM user must have enought priviledges to complete the deployment.

The AWS services this solution uses are:

* Cognito
* S3
* Lambda
* CloudFront
* CloudFormation
* CloudWatchLogs
* SES
* IAM  

## Available Scripts

### Server

In the server/infra/cognito directory, please follow this steps:

#### `npm install`

In the server/infra directory, please follow this steps:

Provide a user pool name and email address to use the AWS SES.

### `AWS_ACCESS_KEY_ID=xxxxxxx AWS_SECRET_ACCESS_KEY=xxxxxxxx USER_POOL_NAME=xxxxxxx SES_FROM_ADDRESS=xxxxxxxxxxx serverless deploy`


### Client

In the client directory, please create an .env.local file with the user pool id and app client id using the following env variable name:

REACT_APP_USERPOOL_ID=xxxxxx
REACT_APP_CLIENT_ID=xxxxxxxx

In the client directory, please follow this steps:

#### `npm install`
#### `npm run build:local`
#### `AWS_ACCESS_KEY_ID=xxxxxxx AWS_SECRET_ACCESS_KEY=xxxxxxxx serverless deploy`


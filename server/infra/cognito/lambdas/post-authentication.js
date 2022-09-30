const { CognitoIdentityServiceProvider } = require('aws-sdk');

const cup = new CognitoIdentityServiceProvider();

module.exports.handler = async event => {
    if (event.request.userAttributes.email_verified !== 'true') {
      const params = {
          UserPoolId: event.userPoolId,
          UserAttributes: [{
              Name: 'email_verified',
              Value: 'true',
          }],
          Username: event.userName,
      };
      await cup.adminUpdateUserAttributes(params).promise();
    }
    return event;
}
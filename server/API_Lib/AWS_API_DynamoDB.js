const { ddbDocClient } = require("../AWS_Class_Lib/ddbDocClient.js");
const { GetCommand, UpdateCommand } = require("@aws-sdk/lib-dynamodb");

const table_name = "CAB_432_Test";
const qut_user_name = "n10840044@qut.edu.au";

const getItem = async () => {
  const params = {
    TableName: table_name,
    Key: {
      "qut-username": qut_user_name,
    },
  };
  try {
    const data = await ddbDocClient.send(new GetCommand(params));
    console.log("AWS_API_DynamoDB: Success - the count was", data.Item.count);
    return parseInt(data.Item.count);
  } catch (err) {
    console.log("AWS_API_DynamoDB: Error in getting count");
    return null;
  }
};

const updateItem = async (num) => {
  const params = {
    TableName: table_name,
    Key: {
      "qut-username": qut_user_name,
    },
    ProjectionExpression: "#count",
    ExpressionAttributeNames: { "#count": "count" },
    UpdateExpression: "set #count = :c",
    ExpressionAttributeValues: {
      ":c": num,
    },
  };
  try {
    const data = await ddbDocClient.send(new UpdateCommand(params));
    console.log("AWS_API_DynamoDB: Success - the count updated to " + num);
    return data;
  } catch (err) {
    console.log("AWS_API_DynamoDB: Error in updating count");
    return null;
  }
};

exports.getItem = getItem;
exports.updateItem = updateItem;

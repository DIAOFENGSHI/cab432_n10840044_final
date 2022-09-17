// Create the DynamoDB service client module using ES6 syntax.
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
// Set the AWS Region.
const REGION = "ap-southeast-2"; // For example, "us-east-1".
const accessKeyId = "ASIA5DYSEEJ45WMEQN5Q";
const secretAccessKey = "2q2zvLot/f/PwDrPIUn6KCBRmplcHIaRquoc+p7E";
const sessionToken =
  "IQoJb3JpZ2luX2VjEF4aDmFwLXNvdXRoZWFzdC0yIkcwRQIgC6DGO7BJXqZgtvEgNzeVflX0ddVA9zby0fPCcbalKsgCIQDQLOxEplgV2bwLNcXBu7QGYSIM0i5Go3DYZfj7ihBSAyq5Awj3//////////8BEAIaDDkwMTQ0NDI4MDk1MyIMtfVZDyjwt30dxJ+EKo0DHWLslH7HllMWzTe6usLDt4jMJJ3rEg5EIjSHv26a++ar5UN+Ru09AfG5+MAloR8LxQEoD9UGtDv9AHmQq97fkaIbGaq2Kr/tvGNSeZG+S4gosaguU3/G91tYDyjlysb1pXYhNFHgy/nwHKYG0wb3Y34tyFUa2dHNkNqb+xK3/IIxjXWiL5KhCv5Y+pMPJ5gkf3EpxX9+OFZQez0MdTmcDy25Sf00e7Kz8q5qc8rFsnp5H8Vr83xwafglZ5I6NLI4o8F23/oC+VYfC/LBXgqs+bFEChloFplNqkW9GLhJ7FXIIrKXd5V0s/NiAZ5WFpFD0VXUYVQdCOTMQCa7ecHPxniGyVpxDEyGj6E8HS2GGHa94u2e99Ac00Ch7mEkJS5X1gK0+63LYcIk/uxlz1S/DJQ/Jsnb5YrI6Sp3ai9ANL5jPZFxpFtbAsoPEGTlUBahiHrcodER2N2zGSy2ANV2t2/BB7SSjJWOoCH6EFHaVzF/QcKq6OSwa/P0M0i1zvLBgm8F9Nw+TPanllNafDCB55OZBjqmAUvhQufX674OPGdmpZ/Z081wB/y8O99we/O6iKZbNKgQBRQTcFl7BJfboELk/zNMdypsYSbAA7zDnguEESCNsB0IQTLqcbTB1wpWrVfJI66Yp/WsG78gEFzk6n1hZnMwNKPvbthvXG7VUeSqK3Bova5h6LInYYnnlBZKPolndDsAgv/VgA9RBxryhnMVTkg8RPaykoGFZMk2TjjJEdtoCLmOgPGCFog=";
// Create an Amazon DynamoDB service client object.
const ddbClient = new DynamoDBClient({
  region: REGION,
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    sessionToken: sessionToken,
  },
});
module.exports = { ddbClient };

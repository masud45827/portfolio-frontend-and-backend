const dynamodb = require("../db/db");

const User = {
  async create({ id, name, email }) {
    const params = {
      TableName: "users",
      Item: { id, name, email },
    };

    await dynamodb.put(params).promise();
    return { message: "User added successfully" };
  },

  async getById(id) {
    const params = {
      TableName: "users",
      Key: { id },
    };
    const data = await dynamodb.get(params).promise();
    return data.Item;
  },

  async getByEmail(email) {
    
    const params = {
      TableName: "users",
      IndexName: "email-index",
      KeyConditionExpression: "email = :email",
      ExpressionAttributeValues: { ":email": email },
    };

      const data = await dynamodb.query(params).promise();
      console.log(data);
      return data;
  },

  async update({ id, name, email }) {
    const params = {
      TableName: "users",
      Key: { id },
      UpdateExpression: "set #name = :name, email = :email",
      ExpressionAttributeNames: { "#name": "name" },
      ExpressionAttributeValues: { ":name": name, ":email": email },
      ReturnValues: "UPDATED_NEW",
    };

    const data = await dynamodb.update(params).promise();
    console.log("User updated successfully");
    return data;
  },

  async delete(id) {
    const params = {
      TableName: "users",
      Key: { id },
    };
    await dynamodb.delete(params).promise();
    console.log("User deleted successfully");
    return { message: "User deleted successfully" };
  },
};

module.exports = User;

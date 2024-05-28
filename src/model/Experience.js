const dynamodb = require("../db/db");

const Experience = {
  async createOnlineContest({ name, link, handle, maxrating, solve }) {
    console.log('ck',name, link, handle, maxrating, solve);
    const params = {
      TableName: "online-contest",
      Item: { name, link, handle, maxrating, solve },
    };

    await dynamodb.put(params).promise();
    return { message: "judge added successfully" };
  },

  async createOnsiteContest({ contestName, teamName, rank, link }) {
    console.log(contestName, teamName, rank, link);
    const params = {
      TableName: "onsite-contest",
      Item: { contestName, teamName, rank, link },
    };

    await dynamodb.put(params).promise();
    return { message: "judge added successfully" };
  },
  async getOnline() {
    const params = {
      TableName: 'online-contest',
    };
    const data = await dynamodb.scan(params).promise();
    return data.Items;
  },

  async getOnsite() {
    const params = {
      TableName: 'onsite-contest',
    };
    const data = await dynamodb.scan(params).promise();
    return data.Items;
  },
  async createProject({name,technology,link}){
    console.log(name,technology,link)
     const params = {
        TableName:'ptoject',
        Item:{
          name,technology,link
        }
     }
     const response = await dynamodb.put(params).promise();
     return response
  },
  async allProject(){
    const params = {
      TableName: 'ptoject',
    };
    console.log('deep')
    const data = await dynamodb.scan(params).promise();

    return data.Items;
 }

  
};

module.exports = Experience;

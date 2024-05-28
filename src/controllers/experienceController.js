const Experience = require("../model/Experience");
exports.createOnlineJudge = async (ctx) => {
  console.log(ctx.request.body);
  const { name, link, handle, maxrating, solve } = ctx.request.body;
  try {
    const data = await Experience.createOnlineContest({
      name,
      link,
      handle,
      maxrating,
      solve,
    });
    ctx.body = data;
  } catch (error) {
    ctx.body = { message: "judge not added" };
  }
};

exports.createOnsiteJudge = async (ctx) => {
  const { contestName, teamName, rank, link } = ctx.request.body;
  console.log(ctx.request.body);
  try {
    const data = await Experience.createOnsiteContest({
      contestName,
      teamName,
      rank,
      link,
    });
    ctx.body = data;
  } catch (error) {
    ctx.body = { message: "contest not added" };
  }
};

exports.getAllOnlineContests = async (ctx) => {
    try {
      const data = await Experience.getOnline();
      ctx.body = data;
    } catch (error) {
      console.error("Controller Error: ", error); 
      ctx.status = 500; 
      ctx.body = { error: error.message }; 
    }
  };


  exports.getAllOnsiteContests = async (ctx) => {
    try {
      const data = await Experience.getOnsite();
      ctx.body = data;
    } catch (error) {
      console.error("Controller Error: ", error); 
      ctx.status = 500; 
      ctx.body = { error: error.message }; 
    }
  };

  exports.createProject= async(ctx)=>{
    console.log('post project details')
    console.log(ctx.request.bofy)
    try{
     
       const data = await Experience.createProject(ctx.request.body);
       ctx.body ={massage:"added"}

    }catch(error){
      ctx.body = {massage:"not added"}
    }
  }

  exports.allProject=async(ctx)=>{
    try{
     
      const data = await Experience.allProject();
      ctx.body=data;

   }catch(error){
     ctx.body = {massage:"not get"}
   }
  }

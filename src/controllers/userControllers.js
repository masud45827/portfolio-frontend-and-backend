const User = require("../model/User");


exports.createUser = async (ctx) => {
  const { id, name, email } = ctx.request.body;
  if (!id || !name || !email) {
    ctx.status = 400;
    ctx.body = { error: " id,name,email are required for create user" };
    return;
  }
  try {
    const response = await User.create(ctx.request.body);
    console.log("user added successfully");
    ctx.status = 200;
    ctx.body = response;
  } catch (err) {
    console.error("Unable to add user", err);
    ctx.status = 500;
    ctx.body = { error: "Unable to add user" };
  }
};


exports.getUserById = async (ctx) => {
  console.log("cumming");
  const { id } = ctx.params;
  try {
    const data = await User.getById(id);
    ctx.status = 200;
    ctx.body = data;
  } catch (err) {
    console.error("error:", err);
    ctx.status = 500;
    ctx.body = { error: "error" };
  }
};


exports.getUserByEmail = async(ctx)=>{
    const { email } = ctx.params;
    try {
      const data = await User.getByEmail(email);
      if (data.Items.length === 0) {
        throw new Error("User not found");
      }
      ctx.status = 200;
      ctx.body = data.Items;
    } catch (err) {
      console.error("error:", err);
      ctx.status = 500;
      ctx.body = { error: "error" };
    }
}


exports.updateUser = async (ctx) => {
  const { id, name,email } = ctx.request.body;
  if (!id || !name || !email) {
    ctx.status = 400;
    ctx.body = { error: " id,name,email are required for update user" };
    return;
  }

  try {
    const data = await User.update(ctx.request.body);
    console.log("User updated successfully");
    ctx.status = 200;
    ctx.body = { message: "User updated successfully", data };
  } catch (err) {
    console.error("Unable to update user", err);
    ctx.status = 500;
    ctx.body = { error: "Unable to update user" };
  }
};



exports.deleteUser = async (ctx) => {
  const { id } = ctx.params;
  if (!id) {
    ctx.status = 400;
    ctx.body = { error: "ID is required for deletion" };
    return;
  }

  try {
     const data = await User.delete(id);
    console.log("User deleted successfully");
    ctx.status = 200;
    ctx.body = data;
  } catch (err) {
    console.error("Unable to delete user", err);
    ctx.status = 500;
    ctx.body = { error: "Unable to delete user" };
  }
};

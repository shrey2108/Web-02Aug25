const UserModel = require("../models/user.model");

// /users?q=""&page=1&limit=20%sortBy=createdAt&sort="asc"
module.exports.getAll = async (req, res) => {
  try {
    let {q, page=1, limit=10, sortBy="createdAt", sort="desc"} = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    const query = {};

    if(q){
      // query.email = { $regex: q || "", $options: "i" };
      query["$or"] = [
        {email: { $regex: q || "", $options: "i" }}, 
        {fullName: { $regex: q || "", $options: "i" }}
      ]
    }

    const skip = (page-1)*limit;
    const sortOptions = {
      [sortBy]: sort == "desc" ? -1 : 1
    }

    const users = await UserModel.find(query)
                        .skip(skip)
                        .limit(limit)
                        .sort(sortOptions)
                        .select("-password -__v")

    res.status(200).json({
      success: true,
      data: users
    })
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong fetching all users",
      error: error.message
    })
  }
}
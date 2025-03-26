import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { User } from "../models/user.model.js";
import {uplodOnClodinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js"

const registerUser = asyncHandler(async (req, res) => {
   
  const { username,fullname, email, password } = req.body;
  console.log(username)
  
  if (
    [fullname, username, email, password].some((field) => {
      field?.trim()===""
    })
  ) {
    throw new ApiError('404', "all fields are required")
  }

  /*const usernameExists = await User.findOne({ username: req.body.username });
  const emailExists = await User.findOne({ email: req.body.email });
  if (usernameExists && emailExists)
    return res.status(400).send("Username and email already taken");
  if (emailExists) return res.status(400).send("Email already taken");
  if (usernameExists) return res.status(400).send("Username already taken");*/
  
  const existedUser= User.findOne({
    $or:[{username},{email}]
  })

  if (existedUser) {
    throw new ApiError(400,"User with email or username alredy exist")
  }
  
  const avatarLocalPath = req.files?.avatar[0]?.path
  const coverImageLocalPath = req.files?.coverImage[0].path

  if (!avatarLocalPath) {
    throw new ApiError(400,"Avatar file is required")
  }

  const avatar = await uplodOnClodinary(avatarLocalPath);
  const coverImage = uplodOnClodinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar file is required");
  }
   
  const user = await User.create(
    {
      fullname,
      avatar: avatar.url,
      coverImage: coverImage?.url || "",
      email,
      password,
      username : username.toLowerCase(),
    }
  )


  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  
  if (!createdUser) {
    throw new ApiError(505,"Something Went Wrong while regestring the user")
  }

  

  return res.status(201).json(
    new ApiResponse(200,createdUser,"User Registerd successfully")
  )



});

export { registerUser };

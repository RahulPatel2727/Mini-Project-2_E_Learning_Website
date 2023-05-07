import userModel from "../models/userModel.js";
import otpModel from "../models/otp.js"
import orderModel from "../models/orderModel.js";
import { hashPassword,comparePassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";
import nodemailer from 'nodemailer';

export const registerController = async (req,res) => {
    try{
        const {name,email,password,cpassword,profile} = req.body

        if (!name) {
            return res.send({ error: "Name is Required" });
          }
        if (!email) {
            return res.send({ message: "Email is Required" });
          }
        if (!password) {
            return res.send({ message: "Password is Required" });
          }
        if(password!=cpassword)
        {
          return res.send({ message: "Confirm password is not matching" });
        }
        if (!profile) {
          return res.send({ message: "Account type is Required" });
        }
        if(profile.toLowerCase()!='student' && profile.toLowerCase()!='teacher')
        {
          return res.send({ message: "Invalid detail, Either choose student or teacher" });
        }

          
        const exisitingUser = await userModel.findOne({email:email})

        if(exisitingUser)
        {
            return res.status(200).send({
                success: false,
                message: "Already Register please login",
              });
        }
        
        const hashedPassword = await hashPassword(password);
    
        const user = await new userModel({
            name,
            email,
            password: hashedPassword,
            profile
        }).save();

        res.status(201).send({
            success: true,
            message: "User Register Successfully",
            user,
        });
    }
    catch(e)
    {
        console.log(e);
        res.status(500).send({
            success:false,
            message:"Error in Registration",
        })
    }
}


export const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
      
      if (!email || !password) {
        return res.status(404).send({
          success: false,
          message: "Invalid email or password",
        });
      }
     
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Email is not registerd",
        });
      }
      const match = await comparePassword(password, user.password);
      if (!match) {
        return res.status(200).send({
          success: false,
          message: "Invalid Password",
        });
      }
      //token
      const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "7d",
      });
      res.status(200).send({
        success: true,
        message: "login successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          profile : user.profile
        },
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in login",
        error,
      });
    }
};

//update prfole
export const updateProfileController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userModel.findById(req.user._id);
    //password
    if (password && password.length < 6) {
      return res.json({ error: "Passsword is required and 6 character long" });
    }
    const hashedPassword = password ? await hashPassword(password) : undefined;
    const updatedUser = await userModel.findByIdAndUpdate(
      req.user._id,
      {
        name: name || user.name,
        password: hashedPassword || user.password,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Profile Updated SUccessfully",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error WHile Update profile",
      error,
    });
  }
};

//orders
export const getOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({buyer:req.user._id })
      .populate("course", "-photo")
      .populate("buyer", "name");
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error WHile Geting Orders",
      error,
    });
  }
};
//orders
export const getAllOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({})
      .populate("course", "-photo")
      .populate("buyer", "name")
      .sort({ createdAt: "-1" });
     
    res.json(orders);
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error WHile Geting Orders",
      error,
    });
  }
};



export const testController = (req,res) =>{
  res.send('protected route');
}

export const emailController = async (req,res) =>{
  try{
    const email = req.body.email;
    const data = await userModel.findOne({email});

    if(data)
    {
      const otpcode = Math.floor(Math.random()*10000+1);
      const otpData = new otpModel({
        email: email,
        otp:otpcode,
        expiresIn: new Date().getTime()+300*1000
      })
  
      const otpResult = await otpData.save();
      
      res.status(200).send({
        success: true,
        message: "Please check your Email Id",
      });
  
      console.log('mail bhej diya');
  
      sendOTPEmail(email,otpcode);
     
    }
    else
    {
      console.log('error he bahi email id ka');
      res.status(200).send({
        success: false,
        message: "Email Id not Exists",
      });
  
    }

  }

  catch(error)
  {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error he bhai kya kar raha he tu",
      error,
    });
  }
  

}

const sendOTPEmail = (email, otp) => {
  // create reusable transporter object using the default SMTP transport
  console.log(email +" "+otp);
   const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL, // replace with your email address
      pass: process.env.PASSWORD // replace with your email password
    }
  });

  // setup email data with OTP
  let mailOptions = {
    from: 'harshzoro001@gmail.com', // replace with your email address
    to: email, // recipient email address
    subject: 'OTP Verification', // email subject
    text: `Your OTP is: ${otp}` // email body with OTP
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });


}

export const otpController = async (req,res) =>{
  try{

  const {email,otp} = req.body;
  console.log(email +" "+otp);
  const data = await otpModel.findOne({$and:[{email},{otp}]});

  if(data)
  {
    let currTime = new Date().getTime();
    let diff = data.expiresIn - currTime;

    if(diff<0)
    {
      res.status(200).send({
        success: false,
        message: "Invalid OTP",
      });
    }
    else{
      res.status(201).send({
        success: true,
        message: "OTP Verified",
      });
    }
  }
  else
  {
    res.status(200).send({
      success: false,
      message: "Invalid Details",
    });
  }
 }
 catch(error){
  console.log(error);
  res.status(500).send({
    success: false,
    message: "Error he bhai kya kar raha he tu",
    error,
  });
 }

}

export const resetController = async (req,res) =>{
  try{
        const {email,password,cpassword}= req.body;
        if(password==cpassword){
            let user = await userModel.findOne({email})
            const hashedPassword = await hashPassword(password);
            user.password = hashedPassword;
            user.save();
            res.status(201).send({
              success: true,
              message: "Password changed successfully",
            });
        }
        
        else
        {
          res.status(200).send({
            success: false,
            message: "confim password is not matching",
          });
        }   
  }
  catch(error)
  {
    console.log(error);
    res.status(500).send({
    success: false,
    message: "Error he bhai kya kar raha he tu",
    error,
  });
  }
 
}
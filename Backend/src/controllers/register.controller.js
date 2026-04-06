const express = require('express')
const User = require('../models/user.model.js');
const bycrypt = require('bcryptjs');

const registerUser = async (req,res) =>{

    try {
        const {username, email, password, phone} = req.body;

        if(!username || !email || !password){
            return res.status(400).json({message: "All fields are required"});
        }

        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message: "User already exists"});
        }
        const user = await User.create({
            username,
            email,
            password,
            phone
        })
        res.status(201).json({
            message: "User registered successfully",
            data:user
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }

}
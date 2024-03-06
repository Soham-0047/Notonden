const { verifytoken, verifyTokenAndAuth } = require("./verifytoken");

const router = require("express").Router();

const Cryptojs = require("crypto-js")

const User = require("../models/User")


module.exports = router


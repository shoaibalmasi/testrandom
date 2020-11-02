var mongoose = require('mongoose')
var Schema = mongoose.Schema

var passengerSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phone: {
        type: String
    },
    active: {
        type: Boolean,
        default: false
    },
    verifyCode: {
        type: Number
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    age: {
        type: String
    },
    gender: {
        type: String
    },
    biography: {
        type: String
    },
    avatar: {
        type: String
    },
    cityId: {
        type: mongoose.Types.ObjectId,
       // set: services.toObjectId,
        ref: 'city'
    },
    provinceId: {
        type: mongoose.Types.ObjectId,
       // set: services.toObjectId,
        ref: 'city'
    },
    birthDate: {
        type: Date
    },
    favoriteList: [
        {
            _id: {
                type: mongoose.Types.ObjectId,
              //  set: services.toObjectId,
                ref: 'favorite'
            }
        }
    ],
    wallet: {
        type: Number,
        default: 0
    },
    date:
        {
            type: Date,
            default: Date.now()
        },
    favoriteResidenceOrTour: [
        {
            _id: {
                type: mongoose.Types.ObjectId,
              //  set: services.toObjectId
            },
            type: {
                type: String
            }

        }
    ],
    provinceName: {
        type: String
    },
    cityName: {
        type: String
    },
    removeFlag: {
        type: Boolean,
        default: false
    },
    techTeam: {
        type: Boolean,
        default: false
    },
    isComplete: {
        type: Boolean,
        default: false
    },
    marriage: {//vaziyat tahol
        type: Boolean
    },
    education: {
        type: String
    },
	job: {
    	type: String
	},
    questionInfo: {
        type: String
    },
    questionTravelForm: {
        type: String
    },
    questionVehicle: {
        type: String
    },
    questionTitle: {
        type: String
    },
    questionClimate: {
        type: String
    },
    questionSeason: {
        type: String
    },
    questionWeather: {
        type: String
    },
    questionPrice: {
        type: String
    },
    questionPlace: {
        type: String
    },
    questionExperience: {
        type: String
    },
    questionReserve: {
        type: String
    },
    point: {
        type: Number,
        default: 0
    },
    codeMeli: {
        type: String
    },
    branchHeadId: {
        type: mongoose.Types.ObjectId,
      //  set: services.toObjectId,
        ref: 'User'
    },
    staticPhone: {
        type: String
    },
    fatherName: {
        type: String
    },
    postalCode: {
        type: String
    },

    type: { //host , tourLeader
        type: String,
        default: ''
    },
    accountNumber: {
        type: String
    },
    bankType: {
        type: String
    },
    religion: {
        type: String
    },
    faith: {//mazhab
        type: String
    },
    description: {
        type: String,
        default: ''
    },
    tourLeaderCertificate: {
        type: String
    },
    nationalCard: {
        type: String
    },
    birthCertificate: {
        type: String
    },
    nationality: {
        type: String
    },
    waitFor: {
        type: String
    },
    isUpdate:{
        type: Boolean,
        default: false
    }


})



module.exports = mongoose.model('User', passengerSchema)

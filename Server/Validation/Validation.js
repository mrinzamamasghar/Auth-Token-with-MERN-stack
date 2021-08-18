const Joi =require("joi")


const registerValidation=data=>{
    const Schema= Joi.object({
        username:
            Joi.string().required().min(2),
        email:
            Joi.string().required().min(2).email(),
        password:
            Joi.string().required().min(2),
    })
    
    return Schema.validate(data)

}

const loginValidation=data=>{
    const Schema= Joi.object({
        email:
            Joi.string().required().min(2).email(),
        password:
            Joi.string().required().min(2),
    })

    return Schema.validate(data)

}

module.exports.registerValidation=registerValidation;
module.exports.loginValidation=loginValidation;

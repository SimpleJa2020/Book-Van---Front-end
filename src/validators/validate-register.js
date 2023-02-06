import Joi from 'joi';

const registerSchema = Joi.object({
    firstName: Joi.string().trim().required().messages({
        'string.empty': 'first name is required'
    }),
    lastName: Joi.string().trim().required().messages({
        'string.empty': 'last name is required'
    }),
    gender: Joi.string().required().messages({
        'string.empty': 'gender is required'
    }),
    emailOrMobile: Joi.alternatives()
        .try(
            Joi.string().email({ tlds: false }),
            Joi.string().pattern(/^[0-9]{10}$/)
        )
        .messages({
            'alternative.match':
                'must be a valid email address or mobile number'
        }),
    password: Joi.string().alphanum().min(6).required().trim().messages({
        'string.empty': 'password is required',
        'string.alphanum': 'password must contain number or alphabet',
        'string.min': 'password must have at least 6 characters'
    }),
    confirmPassword: Joi.string()
        .valid(Joi.ref('password'))
        .required()
        .trim()
        .messages({
            'any.only': 'password and confirm did not match',
            'string.empty': 'confirm password is required'
        })
});

const validateRegister = input => {
    const { error } = registerSchema.validate(input, {
        abortEarly: false
    });
    if (error) {
        const result = error.details.reduce((acc, el) => {
            acc[el.context.label] = el.message;
            return acc;
        }, {});
        return result;
    }

    return error;
};

export default validateRegister;

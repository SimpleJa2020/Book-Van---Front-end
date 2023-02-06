import Joi from 'joi';

const registerSchema = Joi.object({
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    gender: Joi.string().required(),
    emailOrMobile: Joi.alternatives().try(
        Joi.string().email({ tlds: false }),
        Joi.string().pattern(/^[0-9]{10}$/)
    ),
    password: Joi.string().alphanum().min(6).required().trim(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().trim()
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

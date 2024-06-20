import Joi from 'joi';

export const formStructure = [
    { name: 'name', type: 'text', label: 'Name', required: true },
    { name: 'email', type: 'email', label: 'Email', required: true },
    { name: 'message', type: 'text', label: 'Message', required: true },

];

export const schema = Joi.object({
    name: Joi.string().min(2).max(50).label('Name').required(),
    email: Joi.string().email({ tlds: false }).lowercase().trim().required(),
    message: Joi.string().min(2).max(100).label('Message').required(),
}).options({ abortEarly: false });

import Joi from 'joi';

const sendNotification = {
  body: Joi.object().keys({
    headings: Joi.string().required(),
    contents: Joi.string().required(),
    included_segments: Joi.array().required(),
  }),
};

export default {
  sendNotification,
};

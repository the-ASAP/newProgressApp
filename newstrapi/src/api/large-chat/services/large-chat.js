'use strict';

/**
 * large-chat service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::large-chat.large-chat');

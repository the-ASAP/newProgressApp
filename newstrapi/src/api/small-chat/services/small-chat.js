'use strict';

/**
 * small-chat service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::small-chat.small-chat');

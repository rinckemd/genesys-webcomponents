'use strict';

function randomHTMLId(prefix = 'gux') {
  return `${prefix}-${Math.random().toString(36).substr(2, 10)}`;
}

exports.randomHTMLId = randomHTMLId;
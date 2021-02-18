const moment = require('moment');
moment.locale('pt-BR')
function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format('LT')
  }
}

module.exports = formatMessage;
const ERROR_CODES = {
  EMAIL_NOT_FOUND: 'The email address is incorrect.',
  INVALID_PASSWORD: 'The password is incorrect.',
  auth: 'Пожалуйста войдите в систему'
}

export function error(code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка'
}

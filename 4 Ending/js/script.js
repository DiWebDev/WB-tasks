import { formatter } from "./ending.mjs";
const message = (value, info) => {
   return `${value} ${info}`
}

console.log(message(112, formatter(112, ['сообщение', 'сообщения', 'сообщений'])));
console.log(message(3, formatter(3, ['сообщение', 'сообщения', 'сообщений'])));
console.log(message(1, formatter(1, ['сообщение', 'сообщения', 'сообщений'])));
console.log(message(1024, formatter(1024, ['пользователь', 'пользователя', 'пользователей'])));
console.log(message(1026, formatter(1026, ['пользователь', 'пользователя', 'пользователей'])));
console.log(message(121, formatter(121, ['пользователь', 'пользователя', 'пользователей'])));
// экспортируем функцию "getCurrentDate", которая будет возвращать текущую дату, используя Moment.js:
export function getCurrentDate() {
    return moment().format('YYYY-MM-DD');
  }

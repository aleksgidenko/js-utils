const { get } = require('../index')

const obj = {
  name: {
    first: 'Tom',
    last: 'Smith'
  },
  dob: {
    month: 10,
    day: 25,
    year: 1960
  },
  phone: [
    {
      type: 'mobile',
      number: '555-555-5555'
    }
  ]
}

console.log('First Name: ' + get(obj, 'name.first'))
console.log('Middle Name: ' + get(obj, 'name.middle', ''))
console.log('Last Name: ' + get(obj, 'name.last'))
console.log('Phone Number: ' + get(obj, 'phone[0].number'))

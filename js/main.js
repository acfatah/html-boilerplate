console.log('Script loaded')

const params = new URLSearchParams(window.location.search);
const submittedValues = {
  text: params.get('text'),
  password: params.get('password'),
  number: params.get('number'),
  email: params.get('email'),
  date: params.get('date'),
  color: params.get('color'),
  select: params.get('select'),
  textarea: params.get('textarea'),
}

console.group( 'Submitted values:',)
console.log(submittedValues)
console.groupEnd()

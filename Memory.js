/**************************************
 * MEMORY
 * ***********************************/

const defaultAuth = { comment: true, edit: false, admin: false }

const nicolas = { id: 0, auth: defaultAuth }
const charles = { id: 1, auth: defaultAuth }
const yvan    = { id: 2, auth: { ...defaultAuth, admin: true } }

yvan.auth.edit = true // <-- will modify defaultAuth for all users
// charles = yvan // <-- will fail because charles is constant /!\

console.log({nicolas, charles, yvan})

/*eslint-disable*/

const functions = require('firebase-functions')
const admin = require('firebase-admin')
const path = require('path')

const stage = functions.config().env ? functions.confing().env.stage : 'development'
const serviceAccount = require(path.join(__dirname, 'serviceAccount.'+stage+'.json'))
const databaseURL = stage === 'development' ? 'https://my-blog-dev-12f60.firebaseio.com' : 'https://my-blog-8c83e.firebaseio.com'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL
})
const db = admin.database()

exports.posts = functions.https.onRequest((request, response) => {
  const ref = db.ref('/posts')
  ref.once('value', snapshot => {
    const posts = snapshot.val()
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.json(posts)
  })
})
















































exports.create = functions.https.onRequest((request, response) => {
  db.ref('/posts/1').set({
    title: 'Virtual List en ReactJS',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  })
  db.ref('/posts/2').set({
    title: 'React Lazy y React Suspense',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  })

  response.json({status: 'OK'})
})

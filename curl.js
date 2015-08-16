var fs = require('fs')
var Scratch = require('scratch-api')

/*
Scratch.createUserSession('redleader', '5paceBAR', function(err, user) {
  if (err) throw new Error(err);

  console.log(user)
  fs.writeFileSync('./user.json', JSON.stringify(user))
})
*/

// 73253520 - empty
// 12150382 - jh validation demo pong

Scratch.getProject(12150382, function (err, project) {
  console.log(project)
  fs.writeFileSync('./project.json', JSON.stringify(project, null, '\t'))
})

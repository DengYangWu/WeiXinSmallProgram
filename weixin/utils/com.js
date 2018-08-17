function echoHello(user){
  return 'welcome user :'+user+' 回来'
}
function echoBy(user){
  return ''+user+'已经退出，欢迎下次再来~'
}

module.exports.echoHello=echoHello;
exports.echoBy=echoBy;
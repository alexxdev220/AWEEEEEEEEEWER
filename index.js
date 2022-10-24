const bedrock = require('bedrock-protocol')
const chalk = require("chalk")
const readline = require("readline")

const client = bedrock.createClient({
  host: 'aetherpe.net',   
  port: 19132,       
  offline: false
})
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


function listenToUserInput() {
  return rl.question("", (response) => {

    client.queue('text', {
      type: 'chat', needs_translation: false, source_name: client.username, xuid: '', platform_chat_id: '',
      message: `${response}`
    })

    listenToUserInput()
  })
}

client.on('text', (packet) => { 
  
  const ORANGE = chalk.hex('#FFA500'); 
  const GREEN = chalk.hex('#00FF00'); 
  const YELLOW = chalk.hex('#FFFF00'); 
  const BLUE = chalk.hex('#0000FF'); 
  const LGRAY = chalk.hex('#D3D3D3')



  if(packet.message == "death.attack.player"){
    console.log(chalk.red(packet.parameters[0]) + YELLOW(` was slain by `) + GREEN(packet.parameters[1]))
  }


  const STR = packet.message.toString()
  let r = STR.replaceAll('§1', '')
  let r1 = r.replaceAll('§2', '')
  let r2 = r1.replaceAll('§3', '')
  let r3 = r2.replaceAll('§4', '')
  let r4 = r3.replaceAll('§5', '')
  let r5 = r4.replaceAll('§6', '')
  let r6 = r5.replaceAll('§7', '')
  let r7 = r6.replaceAll('§8', '')
  let r8 = r7.replaceAll('§9', '')
  let r9 = r8.replaceAll('§0', '')
  let r10 = r9.replaceAll('§e', '')
  let r11 = r10.replaceAll('§r', '')
  let r12 = r11.replaceAll('§a', '')
  let r13 = r12.replaceAll('§d', '')
  let r14 = r13.replaceAll('§f', '')
  let r15 = r14.replaceAll('§k', '')
  let r16 = r15.replaceAll('§l', '')
  let r17 = r16.replaceAll('§c', '')
  let r18 = r17.replaceAll('§b', '')
  let r19 = r18.replaceAll('§o', '')
  

  console.log(LGRAY(r19))
  



})
listenToUserInput()

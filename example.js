/**
Thanks To MRHRTZ
Thanks To Benny Solo
Thanks To Aqulz
For make the example
*/


//npm or module
const FormData = require('form-data')
const {default: Axios} = require('axios')
const fs = require('fs')
const filetype = require('file-type')
//end module

//function upload file
const uploadFile = (path) => new Promise((resolve, reject) => {
     const fd = new FormData()
     fd.append('file', fs.createReadStream(path))
     Axios({
          method: 'POST',
          url: 'https://up.rzkyfdlh.tech/upload',
          data: fd,
          headers: {
               'user-agent': 'MRHRTZ-ZONE :D',
               'content-type': `multipart/form-data; boundary=${fd._boundary}`
          }
     }).then(({ data }) => resolve(data)).catch(reject)
})

//example for lib baileys ori
case 'tourl':
try {
ger = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply('Tunggu sebentar')
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await uploadFile(owgi)
client.sendMessage(from,anu.result.url,'conversation',{quoted: msg})
} catch(e) {
	reply('Error ngab')
	console.error(e)
	}
break
//end example for lib baileys ori


//example for lib baileys multi device
async function downloadM() {
const mimetype = msg.message.extendedTextMessage.contextInfo.quotedMessage[Object.keys(msg.message.extendedTextMessage.contextInfo.quotedMessage)[0]].mimetype.split('/')[0]
const stream = await downloadContentFromMessage(msg.message.extendedTextMessage.contextInfo.quotedMessage[Object.keys(msg.message.extendedTextMessage.contextInfo.quotedMessage)[0]], mimetype)
        let buffer = Buffer.from([])
        for await(let chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
let ext = await filetype.fromBuffer(buffer)
const filename = './'+Date.now()+'.'+ext.ext
 fs.writeFileSync(filename, buffer)
return filename
}

case 'tourl':
try {
reply('Tunggu sebentar')
owgi = await downloadM()
anu = await uploadFile(owgi)
client.sendMessage(from,{text: anu.result.url},{quoted: msg})
} catch(e) {
	reply('Error ngab')
	console.error(e)
	}
break
//end example for lib baileys multi device


//example for base nurutomo/wabot-aq
let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let mimenya = await filetype.fromBuffer(media)
  let filename = `./${Date.now()}.${mimenya.ext}`
  fs.writeFileSync(filename, media)
  let file = await uploadFile(filename)
  m.reply(file.result.url)
}
handler.help = ['tourl (caption|reply media)']
handler.tags = ['tools']
handler.command = /^(tourl|upload)$/i

module.exports = handler
//end example for base nurutomo/wabot-aq

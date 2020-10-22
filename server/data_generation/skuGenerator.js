const fs = require('fs')
const faker = require('faker')
const argv = require('yargs').argv

const lines = 10000000
const filename = 'skus.csv'
const stream = fs.createWriteStream(filename)
//features need id, feature & value



const startWriting = (writeStream, encoding, done) => {
  let i = lines;
  let id = 0;

  //style needs stylename, price, default_style (1 or 0)
  const createPost = () => {

    const XS = Math.round(Math.random() * Math.floor(100))
    const S = Math.round(Math.random() * Math.floor(100))
    const M = Math.round(Math.random() * Math.floor(100))
    const L = Math.round(Math.random() * Math.floor(100))
    const XL = Math.round(Math.random() * Math.floor(100))
    const XXL = Math.round(Math.random() * Math.floor(100))
    const seven = Math.round(Math.random() * Math.floor(100))
    const eight = Math.round(Math.random() * Math.floor(100))
    const nine = Math.round(Math.random() * Math.floor(100))
    const ten = Math.round(Math.random() * Math.floor(100))
    const eleven = Math.round(Math.random() * Math.floor(100))
    const twelve = Math.round(Math.random() * Math.floor(100))
    const seven_half = Math.round(Math.random() * Math.floor(100))
    const eight_half = Math.round(Math.random() * Math.floor(100))
    const nine_half = Math.round(Math.random() * Math.floor(100))
    const ten_half = Math.round(Math.random() * Math.floor(100))
    const eleven_half = Math.round(Math.random() * Math.floor(100))

    return `${id},${id},${XS},${S},${M},${L},${XL},${XXL},${seven},${eight},${nine},${ten},${eleven},${twelve},${seven_half},${eight_half},${nine_half},${ten_half},${eleven_half}\n`
  }

  function writing(){
    let canWrite = true
    do {
      i--
      let post = createPost()
      //check if i === 0 so we would write and call `done`
      //else call write and continue looping
      if(i === 0){
        // we are done so fire callback
        writeStream.write(post, encoding, done)
        id++
      }else{
        // we are not done so don't fire callback
        writeStream.write(post, encoding)
        id++
      }
      //else call write and continue looping
    } while(i > 0 && canWrite)
    if(i > 0 && !canWrite){
      //our buffer for stream filled and need to wait for drain
      // Write some more once it drains.
      writeStream.once('drain', writing);
    }
  }
  writing()
}

//write our `header` line before we invoke the loop
stream.write(`shu_style,sku_id,XS,S,M,L,XL,XXL,seven,eight,nine,ten,eleven,twelve,seven_half,eight_half,nine_half,ten_half,eleven_half\n`, 'utf-8')
//invoke startWriting and pass callback
startWriting(stream, 'utf-8', () => {
  stream.end()
})
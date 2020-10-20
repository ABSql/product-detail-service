const fs = require('fs')
const faker = require('faker')
const argv = require('yargs').argv

const lines = 1000
const filename = 'styles.csv'
const stream = fs.createWriteStream(filename)
//features need id, feature & value



const startWriting = (writeStream, encoding, done) => {
  let i = lines;
  let id = 0;

  //style needs stylename, price, default_style (1 or 0)
  const createPost = () => {

    const styleName = faker.commerce.color()
    const price = faker.commerce.price()
    const defaultStyle = 0

    return ` ${id},${id},${styleName},${price},${defaultStyle}\n`
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
stream.write(`product_id,style_id,style_name,price,default\n`, 'utf-8')
//invoke startWriting and pass callback
startWriting(stream, 'utf-8', () => {
  stream.end()
})
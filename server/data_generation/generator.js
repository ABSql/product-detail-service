const fs = require('fs')
const faker = require('faker')
const argv = require('yargs').argv

const lines = argv.lines || 10
const filename = argv.output || 'posts.csv'
const stream = fs.createWriteStream(filename)
//productinfo needs: name, slogan, description, category, price
const createPost = () => {
  const productName = faker.commerce.productName();
  const productSlogan = faker.company.catchPhrase();
  const description = faker.lorem.sentence();
  const category = faker.commerce.department();
  const productPrice = faker.commerce.price();

  return `${productName},${productSlogan},${description},${category},${productPrice}\n`
}

const startWriting = (writeStream, encoding, done) => {
  let i = lines
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
      }else{
        // we are not done so don't fire callback
        writeStream.write(post, encoding)
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
stream.write(`Product name, slogan, description, category, price\n`, 'utf-8')
//invoke startWriting and pass callback
startWriting(stream, 'utf-8', () => {
  stream.end()
})
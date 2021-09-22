const Parser = require('rss-parser');
const axios = require('axios');
const readline = require('readline');

const parser = new Parser();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function rssFeedReader(url) {
  try {
    const feed = await parser.parseURL(url);
    console.log(feed.title);

    feed.items.forEach(item => {
      console.log(`${item.title} : ${item.link}`);
      console.log('----------------------------------------');
    })
  } catch(error) { 
    console.log(error);
    console.log('Cannot read url');
  }
}

// https://www.reddit.com/.rss
rl.question('Input url : ', answer => {
  rssFeedReader(answer);
  rl.close();
})

//rssFeedReader('https://kynguyencongnghe.com/feed/');

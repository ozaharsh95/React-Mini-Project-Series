import RSSParser from 'rss-parser';
import cors from "cors";
import express from 'express';

const feedURL = "https://netflixtechblog.com/feed";

const parser = new RSSParser();
let articles = [] //array to store articles
async function parse(URL){
    const feed = await parser.parseURL(URL);
    console.log(feed.title);
    feed.items.forEach((item)=>{
        articles.push({item})
    })
}

parse(feedURL);

let app = express();
app.use(cors());

app.get("/",(req,res)=>{
    res.send(articles);
})

const server = app.listen("4000",()=>{
    console.log(`App-Server is running at 4000 port ....`);
})

export default server;
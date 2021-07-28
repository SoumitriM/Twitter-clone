import { useEffect, useState } from 'react';
//import { tweetList } from './Array';
import Tweet from './Tweet';

const Tweets = () => {

   const [tweets, setTweets] = useState([]);
   //const [initialMount, setInitialMount] = useState(true);
    useEffect( () => {
        const intervalId = setInterval(() => {console.log("fetched...");fetchMoviesHandler();}, 2000);
            
            return () => clearInterval(intervalId);
    },[]);

    const fetchMoviesHandler = async() => {
        const response = await fetch("https://react-smuk-default-rtdb.firebaseio.com/tweets.json");
        const data = await response.json();
        var tweetList = [];
        for(var key in data){
            if(data[key].image === true){
                tweetList.push({
                    id: key,
                    username: data[key].username,
                    userId: data[key].userId,
                    time: data[key].time,
                    tweet: data[key].tweet,
                    image: data[key].image,
                    imageURL : data[key].imageURL
                }); 

            }
            else{
                tweetList.push({
                    id: key,
                    username: data[key].username,
                    userId: data[key].userId,
                    time: data[key].time,
                    tweet: data[key].tweet,
                    image: data[key].image,
                }); 
            }         
        }
        const sortedTweetList = tweetList.sort(function(a,b){
            return new Date(b.time) - new Date(a.time);
          });
        setTweets(sortedTweetList); 
    }
    return(<div>
        {tweets.map((item) =><Tweet key={item.id} item = {item}/>)}
    </div>
        
    );
}

export default Tweets;
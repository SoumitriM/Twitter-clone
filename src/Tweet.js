import { Grid} from '@material-ui/core';
import profilePic from './profile_pic.jpg';
import {Typography} from '@material-ui/core';
import { useEffect, useState } from 'react';
import Card from './Card';
import {timestamp} from './utils';


const Tweet = (props)=> {
    const [like, setLike] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [time, setTime] = useState("");
    const tweetTime = props.item.time;
    useEffect((()=>{
     var time_string = timestamp(tweetTime);
     setTime(time_string); 
    }),[]);

    const likeHandler = (event)=>{
        console.log(props.item);
        let newLikeCount = 0;
        if(like === true){
            newLikeCount = likeCount - 1;
            setLikeCount(newLikeCount);
            setLike(false);
        }
        else if(like === false){
            newLikeCount = likeCount + 1;
            setLikeCount(newLikeCount);
            setLike(true);
        };

    }

    const likeIcon = like? "heart": "heart-outline";

     return(   
         <Card>
             <Grid container>
            <Grid item xs={2} md={2}>
                <img className="profile-pic" src={profilePic} alt="user pic"/>
            </Grid>
            <Grid item xs={10} md={10}>
                <div className="tweet-header">
                    <li className="tweet-username">{props.item.username}</li>
                    <li className="tweet-userId">@{props.item.userId}</li>
                    <li style={{fontSize: "0.3rem", margin: "0 0.5rem 0 0.5rem", color: "grey"}}><ion-icon name="time"></ion-icon></li>
                    <li style={{color: "grey"}}>{time}</li>
                </div>
                
                {props.item.image && <img src={props.item.imageURL} className="tweet-image" alt="tweet-image"/>}
                <p>{props.item.tweet}</p>
                <div className="tweet-icons">
                    <ul>
                        <li><ion-icon name="chatbubble-outline"></ion-icon><span className="react-count">17</span></li>
                        <li><ion-icon name="repeat-outline"></ion-icon></li>
                        <li onClick={likeHandler}><ion-icon name={likeIcon}></ion-icon><span className="react-count">{likeCount}</span></li>
                        <li><ion-icon name="share-outline"></ion-icon></li> 
                    </ul>                                                          
                </div>
            </Grid>
        </Grid>

         </Card>      
        
        )
    };
export default Tweet;
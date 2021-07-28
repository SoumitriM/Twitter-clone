import { Grid} from '@material-ui/core';
import profilePic from './profile_pic.jpg';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Card from './Card';
import { useRef, useState } from 'react';
import {storage} from "./firebase";
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    button: {
        borderRadius: "25px",
        textTransform: "none",
        float: "right"    
    }

})

const NewTweet = () => {
    const classes = useStyles();
    const newTweetInput = useRef("");
   var tweet = "";
   const [image, setImage] = useState(null);
   const [isImage, setIsImage] = useState(false);
   

   const handleImageUpload = (e) => {
       if(e.target.files[0]){
           setImage(e.target.files[0]);
           setIsImage(true);
       }
   }

    const newTweetHandler = (e) => {
        e.preventDefault();
        if(isImage === true){
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            setIsImage(false);
            uploadTask.on(
                "state_changed",
                snapshot => {},
                error => {
                    console.log(error)
                },
                () => {
                    storage.ref("images").child(image.name).getDownloadURL()
                    .then(url => {
                        addTweetHandler({
                            username: "Soumitri",
                            userId: "smellyCat12",
                            time: new Date(),
                            tweet: newTweetInput.current.value,
                            image: true,
                            imageURL: url
                        });
                    });
                    
                }

            );
        }
    
        else if(isImage === false){
            addTweetHandler({
                username: "Soumitri",
                userId: "smellyCat12",
                time: new Date(),
                tweet: newTweetInput.current.value,
                image: false
            });
                    
        }
        newTweetInput.current.value = "";
    }
    async function addTweetHandler(tweet) {        
       const result = await fetch("https://react-smuk-default-rtdb.firebaseio.com/tweets.json",{
            method: "POST",
            body: JSON.stringify(tweet),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type" : "application/json"
            }
        });
        if(result.ok) console.log("item saved"+result.json());
    };
    return(
        <Card>
            <Grid container>
                <Grid item xs={2} md={2}>
                    <img className="profile-pic" src={profilePic} alt="profile-picture"/>
                </Grid>
                <Grid item xs={10} md={10}>
                   <form className=" tweet-form" onSubmit={newTweetHandler}>
                     <input  type="text" name="tweet" placeholder="What's Happening?" ref={newTweetInput}/>
                     <div className="new-tweet-icons">
                        <ul>
                          <li><label for="file"><ion-icon name="image-outline"></ion-icon></label>
                          <input type="file" id="file" onChange={handleImageUpload}style={{"display": "none"}}/></li>
                          <li><ion-icon name="camera-outline"></ion-icon></li>
                          <li><ion-icon name="happy-outline"></ion-icon></li>
                          <Button variant="contained" type="submit" color="primary" className={classes.button} disableElevation>Tweet</Button>
                        </ul>                                                         
                      </div>
                   </form>
                   {isImage && <p>{image.name}</p>}
                </Grid>        
            </Grid>
        </Card>
                
    
    );
}

export default NewTweet;
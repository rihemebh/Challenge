
import './quote.scss'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';


 
function Quote(props) {



  return (
      <div className="card-container">
        {props.isSingle? "":
         <Button size="small " className="button-save" onClick={props.previous}>
           <ArrowCircleLeftIcon /></Button> }
      
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 16 }} color="text.black" gutterBottom>
        {props.text}
      </Typography>

      <Typography sx={{ mb: 1.5, fontSize: 12}} color="text.secondary">
        {"__"+ props.author}
      </Typography>
  
    </CardContent>
    <div className="icon-container">
    <img src="/téléchargement.png" className='quote-icon' width="50" />
    </div>
    {props.isSingle? "":    <CardActions>
      {props.saved.includes(props.index) ?<Button size="small " className="button-save" onClick={props.save}><FavoriteIcon/></Button>
      : <Button size="small " className="button-save" onClick={props.save}><FavoriteBorderIcon/></Button>}
      {props.isPaused ?<Button size="small " className="button-pause" onClick={props.play}><PlayArrowIcon/>
      </Button> : <Button size="small " className="button-pause" onClick={props.pause}><PauseIcon/></Button>}
      
    </CardActions>}
 
  </Card>
  {props.isSingle? "":<Button size="small " className="button-save" onClick={props.next}>
    <ArrowCircleRightIcon /></Button> }
  
  </div>
  );
}

export default Quote;
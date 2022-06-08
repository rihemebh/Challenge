import { useEffect, useState } from "react";
import { GetQuotes } from "../services/quote_service";
import LinearProgress from '@mui/material/LinearProgress';
import './quote_view.scss'
import StoriesContainer from "../components/stories_containers/stories_container";


function QuoteView(props) {
  const [quotes, setQuotes] = useState([])
 
  useEffect(() => {
    localStorage.removeItem('saved')

    GetQuotes(6).then((response) => {
      setQuotes(response.data.quotes)
    
    }).catch((error) => {
      console.log(error)
    })

  }, []);



  return (
    <>

      <div className="App">
           {quotes.length === 0 ? <LinearProgress /> :  <StoriesContainer quotes={quotes} />}

      </div>

    </>
  );
}

export default QuoteView;
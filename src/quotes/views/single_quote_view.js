import { useEffect, useState } from "react";
import './quote_view.scss'
import Quote from "../components/quote-card/quote";
import "./single_quote_view.scss"
import {useParams} from "react-router-dom";
import { LinearProgress } from "@mui/material";


function SingleQuoteView(props) {
const [quote, setQuote] = useState()
    const {index} = useParams()

useEffect(()=>{

  const list = JSON.parse(localStorage.getItem('saved'))

  if (list)
  setQuote(list[index])
},[])

  return (
    <>

      <div className="App quote-container">
         {quote?  <Quote text={quote.text} author={quote.author} isSingle /> : "No quote saved"}

      </div>

    </>
  );
}

export default SingleQuoteView;
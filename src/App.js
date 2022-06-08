import './App.css';
import QuoteView from './quotes/views/quote_view';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './welcome';
import ResponsiveAppBar from "./quotes/components/appBar/appbar";
import SingleQuoteView from './quotes/views/single_quote_view';

function App() {
  return (
    <>
       
    <BrowserRouter>
    <ResponsiveAppBar></ResponsiveAppBar>
      <Routes>
        <Route path="quotes" element={<QuoteView />} />
        <Route exact path="quote/:index"  element={<SingleQuoteView/>}/>
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={() => {
          return <h1>404</h1>;
        }}/>
    
    </Routes>

  </BrowserRouter >
  </>
  );
}

export default App;

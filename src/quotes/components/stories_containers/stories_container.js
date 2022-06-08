import * as React from 'react';
import './stories_container.scss'
import { useEffect, useState } from "react";
import QuoteCard from "../../components/quote-card/quote";


function StoriesContainer(props) {
    const [quote, setQuote] = useState()
    const [progress, setProgress] = useState(0);
    const [index, setIndex] = useState(0)
    const [isFinished, setIsFinished] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [isResumed, setIsResumed] = useState(false)
    const [isSaved, setIsSaved] = useState(false)

    const save = () => {
        let list = []
        setIsSaved(true)
            if(localStorage.getItem("saved"))
                list =  JSON.parse(localStorage.getItem("saved"))
            list.push(props.quotes[index])  
            localStorage.setItem("saved", JSON.stringify(list))
    }

    const pause = () => {
        setIsPaused(true)
    }

    const play = () => {
        setIsPaused(false)
        setIsResumed(true)
    }

    useEffect(() => {
        if (progress == 1) {
            setIsResumed(false)
        }
        if (progress == 0) {
            setIsPaused(false)
        }
    }, [progress])

    const next = () => {
        handleNextQuote()
        setProgress(0)
        setIsPaused(true)
    }

    const previous = () => {
        if (index >= 0) {
            setIndex((prev) => prev - 1)
            setProgress(0)
            setIsPaused(true)
        } else {
            setIsFinished(true);
        }
    }
    const handleNextQuote = () => {
        if (index < props.quotes.length - 1) {
            setIndex((prev) => prev + 1)
        } else {
            setIsFinished(true);
        }
    }

    useEffect(() => {
        /** Every time the index changed we chnage the content of the quote state to render it */
        if (!isFinished)
            setQuote(props.quotes[index])
    }, [index])

    useEffect(() => {
/** The timer of the progress bar */
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress < 1) {
                    if (oldProgress + 0.001 > 1) return 1
                    return oldProgress + 0.001
                }
                if (!isFinished) {
                    handleNextQuote()
                    return 0
                }
                return 1
            });
        }, 10);

        if (isFinished) {
            clearInterval(timer)
            setProgress(1)
        }
        if (isPaused) {
    
            clearInterval(timer)
        }
        return () => {
            clearInterval(timer);
        };
    }, [index, isFinished, isPaused]);

    return (
        <div className='stories-container'>


            <div className='progress-bar'>
                <div className="progressbar-bg" style={{
                    height: "2px", maxWidth: "100%", background: "red",
                    margin: "2px", borderRadius: "2px", transition: "all 400ms ease-in-out",
                    width: "100%", opacity: "1"
                }}>
                    <div className="bar" style={{
                        background: 'lightgrey', height: '100%', maxWidth: '100%',
                        borderRadius: '2px', transformOrigin: 'left center', backfaceVisibility: 'hidden',
                        perspective: '1000px', width: '100%'
                    }}>
                        <div className="progress" style={{
                            transform: `scaleX(${progress}) `, background: "#0d28f2",
                            height: "100%", maxWidth: "100%", borderRadius: "2px", transformOrigin: "left center",
                            backfaceVisibility: "hidden", perspective: "1000px"
                        }}>

                        </div>
                    </div>

                </div>
            </div>
            <div >      {index + 1} / {props.quotes.length}</div>
            <div className={isFinished || isPaused ? 'content' : isResumed ? progress > 0.6 ? "resumed-animation-content" : "content" : "animated-content"} >
                {
                    quote ? isFinished ? <div className='animated-text'>No more Quotes</div> : <>

                        <QuoteCard text={quote.text} author={quote.author}
                            next={next} pause={pause} save={save} previous={previous} play={play} isPaused={isPaused}
                            isSaved={isSaved} />
                    </> : <div className='animated-text'>Waiting for quotes</div>

                }

            </div>

        </div>

    );
}

export default StoriesContainer;
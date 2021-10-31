const quotes = [
    {text: `The greatest glory in living lies not in never falling, but in rising every time                 we fall.`,
     author: `Nelson Mandela`
    },
    {text: `The way to get started is to quit talking and begin doing.`,
     author: `Walt Disney`
    },
    {text: `Your time is limited, so don't waste it living someone else's life. Don't be     trapped by dogma – which is living with the results of other people's thinking.`,
     author: `Steve Jobs`
    },
    {text: `If life were predictable it would cease to be life, and be without flavor.`,
     author: `Eleanor Roosevelt`
    },
    {text: `If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.`,
     author: `Oprah Winfrey`
    },
    {text: `If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.`,
     author: `James Cameron`
    },
    {text: `Life is what happens when you're busy making other plans.`,
     author: `John Lennon`
     }
  ];

class App extends React.Component {
state = {
  quotes: quotes,
  text: '',
  author: ""
}

componentDidMount() {
  const n = Math.floor(Math.random() * 8);
  const quotes = this.state.quotes[n];
  this.setState({text: quotes.text, author: quotes.author});
}

handleClick = () => {
  const n = Math.floor(Math.random() * 8);
  const quotes = this.state.quotes[n];
  this.setState({text: quotes.text, author: quotes.author});
}

render() {
  return (
     <div id="quote-box">
       <p id="text">{this.state.text}</p>
       <p id="author">{this.state.author}</p>
       <div className="row">
         <div className='col-6'>
           <a target="_blank" href="twitter.com/intent/tweet" id="tweet-quote" className='btn btn-primary'>
             Tweet
           </a>
         </div>
         <div className="col">
           <span onClick={this.handleClick} id="new-quote" className='btn btn-primary'>
             New Quote
           </span>
         </div>
       </div>   
     </div>
  )
}
}


ReactDOM.render(<App />, document.getElementById('root'));
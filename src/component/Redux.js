import React from "react"
import { connect } from "react-redux"
import { fetchUser } from "../action/userAction"
import { fetchTweet } from "../action/tweetAction"

// connect takes two functions. first one injects store as props. second one 
@connect((store) => {
    return {
        user: store.user.user,
        tweet: store.tweet.tweets
    }
})

export default class Redux extends React.Component{
    componentWillMount(){
        this.props.dispatch(fetchUser())
    }
    fetchTweet(){
        this.props.dispatch(fetchTweet())
    }
    render() {
        if (!this.props.tweet.length){
            return <button className="btn btn-default" onClick={this.fetchTweet.bind(this)}>Load tweets</button>
        }
        
        const mappedTweet = this.props.tweet.map(tweet => <li>{tweet.text}</li>)
        return (
            <div>
                <h1>User Name: {this.props.user.name}</h1>
                <ul>{mappedTweet}</ul>
            </div>
        )
    }
}
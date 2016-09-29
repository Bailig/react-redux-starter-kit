import React from "react"
import { connect } from "react-redux"

import Header from "./Header"
import Footer from "./Footer"
import Redux from "./Redux"
import { fetchUser } from "../action/userAction"
import { fetchTweet } from "../action/tweetAction"

export default class Layout extends React.Component{
    render() {                    
        return (
            <div>
                <Header />
                    <Redux />
                <Footer />
            </div>
        )
    }
}
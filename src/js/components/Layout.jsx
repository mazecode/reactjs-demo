import React from "react";
import {connect} from "react-redux";

import {fetchPerson} from "../actions/personActions";
import {fetchTweets} from "../actions/tweetsActions";
import {fetchUser} from "../actions/userActions";

@connect((store) => {
    return {
        person: store.person.person,
        personFetched: store.person.fetched,
        tweets: store.tweets.tweets,
        user: store.user.user,
        userFetched: store.user.fetched
    };
})

export default class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchUser());
        this.props.dispatch(fetchPerson());
    }

    componentWillUnMount() {
        this.props.dispatch(fetchUser());
        this.props.dispatch(fetchPerson());
    }

    fetchPerson() {
        this.props.dispatch(fetchPerson());
    }

    fetchTweets() {
        this.props.dispatch(fetchTweets());
    }

    render() {
        const {person, user, tweets} = this.props;

        // if (!tweets.length) {
        //     return (
        //         <div>
        //             <h1>{user.name}</h1>
        //             <button onClick={this.fetchTweets.bind(this)}>load Tweets</button>
        //         </div>
        //     )
        // }

        if (!person.hasOwnProperty("results")) {
            return (
                <div>
                    <h1>{user.name}</h1>
                    {/*<button onClick={this.fetchPerson.bind(this)}>load Person</button>*/}
                </div>
            )
        }


        // const mappedTweets = tweets.map((tweet) => {
        //     return (
        //         <li key={tweet.id}>{tweet.text}</li>
        //     )
        // });

        const mappedPerson = person.results.map((person) => {
            return (
                <div className="row">
                    <div className="card text-center">
                        <img className="card-img-top" src={person.picture.large} alt="Card image cap"/>
                        <article className="card-block">
                            <p className="card-text">{person.name.first} {person.name.last}
                                <br />
                                <small>{person.email}</small>
                            </p>
                        </article>
                    </div>
                </div>
            )
        });

        return (
            <div>
                {/*<h1>{user.name}</h1>*/}
                {mappedPerson}
                {/*<ul>{mappedTweets}</ul>*/}
            </div>
        )
    }
}

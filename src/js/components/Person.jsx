import React from "react";

export default class Persons extends React.Component {
    constructor(props) {
        super(props);
    }

    renderPersonList() {
        return this.props.persons.results.map((person) => {
            return (
                <div className="card text-center" key={person.id.value}>
                    <img className="card-img-top" src={person.picture.large} alt="Card image cap"/>
                    <article className="card-block">
                        <p className="card-text">{person.name.first} {person.name.last}
                            <br />
                            <small>{person.email}</small>
                        </p>
                    </article>
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                <div className="row align-items-center">
                    <div className="col">
                        {this.renderPersonList()}
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';

export class Home extends Component {
constructor(props){
    super(props);
    this.state = {
        location: ""
    };
    this.locationChange = this.locationChange.bind(this);
}

locationChange(e){
    this.setState({
        location: e.target.value
    });
}

componentDidUpdate(){
    console.log(this.state)
}


    render() {
        return (
            <div>
                <header className="main-header">
                    <h1>Weather Dashboard</h1>
                </header>

                <div className="container-fluid" style={{ maxWidth: '1400px' }}>
                    <div className="row">
                        <aside className="col-lg-3 pb-3">
                            <h2 id="sidebar-title">Search for a City:</h2>

                            <form id="citySearch">
                                <div className="input-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="City Here"
                                        id="city-input"
                                        onChange={this.locationChange}
                                    />

                                    <div className="input-group-append"></div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    id="sidebar-btn"
                                >
                                    Search
                                </button>
                            </form>
                            <div id="history"></div>
                        </aside>
                    </div>
                </div>
            </div>

        )
    }
}

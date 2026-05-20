import React from 'react';
import TitleComponent from './titleComponent';
class CardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titles: [
                'Backend Development',
                'Mobile Design',
                'Logo Design',
                'Web Application Development',
                'Mobile Application Development',
                'PWA Development',
            ],
        };
    }

    render() {
        return (
            <div className="container my-5">
                <TitleComponent color="dark" title="Portfolio" />

                <div className="row g-3">
                    {this.state.titles.map((title, index) => {
                        const backgroundColor =
                            index % 2 === 0 ? 'bg-dark' : 'bg-secondary';
                        return (
                            <div key={index} className="col-md-4">
                                <div
                                    className={`card ${backgroundColor} text-center text-light p-5 h-100`}
                                >
                                    <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                        <hr className="bg-light" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default CardComponent;

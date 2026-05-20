import React from 'react';
import TitleComponent from './titleComponent';
import ButtonComponent from './buttonComponent';
class AboutComponent extends React.Component {
    render() {
        return (
            <>
                <div className="container my-5">
                    <div className="d-flex mb-2">
                        <div className="col-6">
                            <TitleComponent color="black" title="About me" />
                        </div>
                        <div className="col-6">
                            <div class="d-flex flex-column mb-2">
                                <p class="text-start">
                                    At vero eos et accusamusEt harum quidem
                                    rerum facilis est et expedita distinctio.
                                    Nam libero tempore, cum soluta nobis est
                                    eligendi optio cumque nihil impedit quo
                                    minus id quod maxime placeat facere
                                    possimus, omnis voluptas assumenda est,
                                    omnis dolor repellendus. Temporibus autem
                                    quibusdam et aut officiis debitis aut rerum
                                    necessitatibus saepe eveniet ut et
                                    voluptates repudiandae sint et molestiae non
                                    recusandae. Itaque earum rerum{' '}
                                </p>
                                <ButtonComponent
                                    color="dark"
                                    name="Download Reasume"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default AboutComponent;

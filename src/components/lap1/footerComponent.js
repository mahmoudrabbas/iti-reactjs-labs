import React from 'react';
import SkillTiltle from './skillTitle';
import ButtonComponent from './buttonComponent';
class FooterComponent extends React.Component {
    render() {
        return (
            <footer className="bg-dark text-light py-5 border-top border-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-4 d-flex flex-column align-items-start gap-2">
                            <SkillTiltle name="Keep In Touch" />
                            <a
                                href="#"
                                className="text-light text-decoration-none"
                            >
                                <i className="fa-solid fa-envelope"></i>{' '}
                                mahmoud@gmail.com
                            </a>
                            <a
                                href="#"
                                className="text-light text-decoration-none"
                            >
                                <i className="fa-solid fa-phone"></i> +2555555
                            </a>
                        </div>

                        <div className="col-4 d-flex justify-content-center">
                            <ButtonComponent color="light" name="Contact me" />
                        </div>

                        <div className="col-4 d-flex justify-content-end gap-3">
                            <a
                                href="#"
                                className="text-light text-decoration-none"
                            >
                                <i className="fab fa-facebook-f me-2"></i>{' '}
                            </a>
                            <a
                                href="#"
                                className="text-light text-decoration-none"
                            >
                                <i className="fab fa-twitter me-2"></i>{' '}
                            </a>
                            <a
                                href="#"
                                className="text-light text-decoration-none"
                            >
                                <i className="fab fa-linkedin-in me-2"></i>{' '}
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterComponent;

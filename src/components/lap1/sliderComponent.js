import React from 'react';
import ButtonComponent from './buttonComponent';
import TitleComponent from './titleComponent';
class sliderComponent extends React.Component {
    render() {
        return (
            <section className="hero-container">
                <div className="hero-overlay">
                    <div className="hero-content">
                        <TitleComponent
                            className="hero-title"
                            color="light"
                            title="Mahmoud Ramadan"
                        />
                        <p className="hero-subtitle">Sotware developer</p>
                        <ButtonComponent name="contact me" color="light" />
                    </div>
                </div>
            </section>
        );
    }
}

export default sliderComponent;

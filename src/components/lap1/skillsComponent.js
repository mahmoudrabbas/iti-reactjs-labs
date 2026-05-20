import React from "react";
import TitleComponent from './titleComponent';
import ProgressComponent from "./progressComponent";
import SkillTiltle from "./skillTitle";

class SkillsComponent extends React.Component {
    render() {
        return (
            <section className="my-5 bg-dark text-light py-5">
                <TitleComponent color="light" title="Skills" className="p-5" />

                <div className="container">
                    <p className="text-center mx-auto mb-5" style={{ maxWidth: '800px', opacity: '0.8' }}>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
                        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint 
                        occaecati cupiditate non provident.
                    </p>

                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <SkillTiltle name="My Focus" />
                            <hr className="bg-light" />
                            <ul className="list-unstyled">
                                <li>UI/UX Design</li>
                                <li>Responsive Design</li>
                                <li>Web Development</li>
                                <li>Mobile App Design</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <div className="d-flex flex-column gap-3">
                                <ProgressComponent value="95%" name="HTML" />
                                <ProgressComponent value="90%" name="CSS" />
                                <ProgressComponent value="85%" name="JavaScript" />
                                <ProgressComponent value="70%" name="PhotoShop" />
                                <ProgressComponent value="75%" name="Adobe XD" />
                                <ProgressComponent value="50%" name="Node.js" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SkillsComponent;
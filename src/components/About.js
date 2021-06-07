import React from "react"


const About = () => {
    return (
        <section id="About" className="bg-gray text-center">

            {/* About Me Container */}
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-12 main-about">
                        <h1 className="after-line"><b>About Me</b></h1>
                        <br />
                        <p>My name is <b>Jake Rod</b>, 
                            <br /> I'm a <b>full-stack web developer.</b>
                            <br /> I build <b>responsive</b>, <b>mobile-friendly</b> web apps.
                            <br /> I'm an <b>adaptive</b> and <b>passionate</b> worker.
                            <br /> My <b>growing skillset</b> includes:
                        </p>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default About

import React from 'react'

const Skill = () => {
    return (
        <section id="skill-page">
            <div className="skill-page-wrapper container">
                <h3 className="header-title">
                    My Skills
                </h3>

                <section className='my-5'>
                    <div className="skill-card">
                        <div className="skill-card-body">
                            <i className="uil uil-brackets-curly"></i>
                            <h3>Frontend</h3>
                            <p>Flutter, Kotlin, HTML, CSS, Bootstrap, JavaScript, React</p>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-card-body">
                            <i className="uil uil-database"></i>
                            <h3>Backend</h3>
                            <p>Django, PHP, MySQL, Firebase, SQLite</p>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-card-body">
                            <i className="uil uil-palette"></i>
                            <h3>Design</h3>
                            <p>Figma, Adobe XD</p>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-card-body">
                            <i class="uil uil-code-branch"></i>
                            <h3>Others</h3>
                            <p>Git, Linux, Android Studio, VS Code</p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Skill
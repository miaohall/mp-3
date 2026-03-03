import {Link} from "react-router";

export default function Projects() {
    return (
        <main>
            <div id="content">
                <h3>Projects</h3>
                <h4>Predicting Phishing Scams Based on URL Features</h4>
                <h5>Spring 2024</h5>
                <p className="proj-descript">This project is a Python analysis of whether a phishing scam can be
                    detected by it's URL contents.
                    It utilized supervised machine learning techniques (K Nearest Neighbors and Random Forest
                    classification models) with Scikit-Learn, to classify URLs as phishing or non-phishing based on
                    certain features, including URL parameters, path level, and security protocol.
                    We conducted statistical analyses, such as t-tests and correlation studies using Matplotlib, SciPy,
                    and NumPy.
                    We created visualizations including feature importance plots, bar charts, box plots, scatter plots,
                    and histograms using Matplotlib, NumPy and Seaborn.</p>

                <Link to="https://github.com/miaohall/Phishing-URL-Scam-Detector-Analysis.git" id="proj-button">Check it
                    out here!</Link>
            </div>

            <div id="calc-part">
                <h4>Calculator</h4>

                <label htmlFor="first-number">First Number:</label>
                <input type="text" id="first-number"/>
                <br/>
                <label htmlFor="second-number">Second Number:</label>
                <input type="text" id="second-number"/>
                {/*
                <br/>
                <button onClick="addition()">+</button>
                <button onClick="minus()">-</button>
                <button onClick="multiply()">*</button>
                <button onClick="divide()">/</button>
                <button onClick="power()">**</button>
                <button id="clear-button" onClick="reset()">Clear</button>

                <script src="calc.js"></script>

                <br/>
                */}
                <h5 id="output"></h5>
            </div>
        </main>
    );
}
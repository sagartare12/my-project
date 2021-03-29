import React from 'react';
import './Jobs.css'
import jobsData from './jobsData'
import Job from './Job'





const JobsContents = () => {
    return (
        <section className="contentlist">

            {jobsData.map((box) =>{

                return (
                    <React.Fragment>
                        <Job key={jobsData.id} cont={box}></Job>
                    </React.Fragment>
                )
            })}
        </section>
    );
}

export default JobsContents









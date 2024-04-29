import React, { useState } from 'react';

export default function Profile(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [form, setForm] = useState(false);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };
    const meetingform = () => {
        setForm(!form);
    };

    const certificationColor = (certification) => {
        return certification ? "green" : "red";
    };

    const graduationStatus = () => {
        if (props.resume && props.linkedin && props.mockInterview && props.github && props.ctotal > 600) {
            return <span style={{ color: "green" }}>On Track to Graduate</span>;
        } else {
            return <span style={{ color: "red" }}>Off Track to Graduate</span>;
        }
    };

    const calculatePercentage = (value, total) => {
        const percentage = (value / total) * 100;
        return `${percentage}`;
    };
    const percentage = (value, total) => {
        const percent = (value / total) * 100;
        return `${percent.toFixed(0)}%`;
    };

    return (
        <div>
            <div key={props.id} className="profile">
                <img src={props.profilePhoto} width={'70px'} />
                <p className="student-name">{props.preferredName} {props.middleName} {props.surname}</p>
                <p className="student-user">{props.username}</p>
                <p className="student-dob"><span>Birthday:</span> {props.dob}</p>
                <p className="graduation-status">{graduationStatus()}</p>
                <button className='btn' onClick={toggleContent}>
                    {isOpen ? "Show Less..." : "Show More..."}
                </button>
                {isOpen && (
                    <div className='mor'>
                        <p className='more1'>Codewars:</p>
                        <ul className='morem1'>
                            <li> <span>Current Total: </span> {props.ctotal}</li>
                            <li> <span>Last Week:</span>  {props.lastWeek}</li>
                            <li> <span> Goal:</span> {props.gtotal}</li>
                            <li><span>Percent of Goal Achieved:</span> {percentage(props.ctotal, props.gtotal)}</li>
                        </ul>
                        <p className='more2'>Scores:</p>
                        <ul className='morem2'>
                            <li> <span>Assignments:</span>  {calculatePercentage(props.assignments, 1)} %</li>
                            <li> <span>Projects:</span> {calculatePercentage(props.projects, 1)} %</li>
                            <li> <span> Assessments:</span> {calculatePercentage(props.assessments, 1)} %</li>
                        </ul>
                        <p className='more2'>Certifications:</p>
                        <ul className='morem3'>
                            <li style={{ color: certificationColor(props.resume) }}> <span>Resume:</span>  {props.resume ? "✓" : "X"}</li>
                            <li style={{ color: certificationColor(props.linkedin) }}> <span>Linkedin:</span>  {props.linkedin ? "✓" : "X"}</li>
                            <li style={{ color: certificationColor(props.mockInterview) }}> <span>Mock Interview:</span>  {props.mockInterview ? "✓" : "X"}</li>
                            <li style={{ color: certificationColor(props.github) }}> <span>GitHub:</span> {props.github ? "✓" : "X"}</li>
                        </ul>

                        <button className='btn1' onClick={meetingform}>
                            {form ? "Close Form" : "Open Form"}
                        </button>
                        {form && (
                            <div>

                            <h3 className='h3'>1-on-1 Notes</h3>

                            <form className='from'>
                                <label htmlFor="name"> Commenter Name  </label>
                                <input type="text" id="name" name="name" />
                                <br /> <label htmlFor="comment">Comment  </label>
                                <input type="text" id="comment" name="comment" /><br />
                                <button className='btn2'>Add Note</button>
                            </form>

                            <li className='note'><b>Alan R.</b> says, {props.preferredName} is a pleasure to work with!</li>
                    </div>
                )}
            </div>
                )}
        </div> 
        </div >

    ); 
}


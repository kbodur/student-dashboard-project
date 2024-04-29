import React, { useState } from 'react';
import App from '../App';

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
    const dateChange = (value) => {
        let dob = props.dob.split("/")
        console.log(dob)
        const currentMonth = new Date(dob[1])
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return (months[currentMonth.getMonth()] + " " + dob[0] + ", " + dob[2]);
    }

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
                <p className="student-dob"><span>Birthday:</span> {dateChange(props.dob)}</p>
                <p className="graduation-status">{graduationStatus()}</p>
                <button className='btn' onClick={toggleContent}>
                    {isOpen ? "Show Less..." : "Show More..."}
                </button>
                {isOpen && (
                    <div className='mor'>
                        <div className="more1">
                            <p className='more'>Codewars:</p>
                            <ul >
                                <li> <span>Current Total: </span> {props.ctotal}</li>
                                <li> <span>Last Week:</span>  {props.lastWeek}</li>
                                <li> <span> Goal:</span> {props.gtotal}</li>
                                <li><span>Percent of Goal Achieved:</span> {percentage(props.ctotal, props.gtotal)}</li>
                            </ul>
                        </div>
                        <div className="more2">
                            <p className='more'>Scores:</p>
                            <ul>
                                <li> <span>Assignments:</span>  {calculatePercentage(props.assignments, 1)} %</li>
                                <li> <span>Projects:</span> {calculatePercentage(props.projects, 1)} %</li>
                                <li> <span> Assessments:</span> {calculatePercentage(props.assessments, 1)} %</li>
                            </ul>
                        </div>
                        <div className="more3">
                            <p className='more'>Certifications:</p>
                            <ul>
                                <li style={{ color: certificationColor(props.resume) }}> <span>Resume:</span>  {props.resume ? "✓" : "X"}</li>
                                <li style={{ color: certificationColor(props.linkedin) }}> <span>Linkedin:</span>  {props.linkedin ? "✓" : "X"}</li>
                                <li style={{ color: certificationColor(props.mockInterview) }}> <span>Mock Interview:</span>  {props.mockInterview ? "✓" : "X"}</li>
                                <li style={{ color: certificationColor(props.github) }}> <span>GitHub:</span> {props.github ? "✓" : "X"}</li>
                            </ul>
                        </div>

                        <button className='btn1' onClick={meetingform}>
                            {form ? "Close Form" : "Open Form"}
                        </button>
                        {form && (
                            <div className='form1'>

                                <h3 className='h3'>1-on-1 Notes</h3>

                                <form className='from'>
                                    <label htmlFor="name"> Commenter Name  </label>
                                    <input type="text" id="name" name="name" />
                                    <br /> <label htmlFor="comment">Comment  </label>
                                    <input type="text" id="comment" name="comment" /><br />
                                    <button className='btn2'>Add Note</button>
                                </form>
                                <ul></ul>
                                <li className='note'><b>Alan R.</b> says, {props.preferredName} is a pleasure to work with!</li>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div >
    )
}


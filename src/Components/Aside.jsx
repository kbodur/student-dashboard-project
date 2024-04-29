

import React from "react";
import data from "../data/data.json";
import Profile from "./Profile";

export default function Aside({ data, currentCohort }) {
    return (
        <aside>
            <h3>{currentCohort ? `${currentCohort}` : "All Students"}</h3>
            <p className="total">
                Total Students: <span>{data.length}</span>
            </p>
            <div className="student-info">
                {data.map((person, index) => (
                    <Profile
                        key={index}
                        id={person.id}
                        profilePhoto={person.profilePhoto}
                        preferredName={person.names.preferredName}
                        middleName={person.names.middleName}
                        surname={person.names.surname}
                        username={person.username}
                        dob={person.dob}
                        ctotal={person.codewars.current.total}
                        lastWeek={person.codewars.current.lastWeek}
                        gtotal={person.codewars.goal.total}
                        assignments={person.cohort.scores.assignments}
                        projects={person.cohort.scores.projects}
                        assessments={person.cohort.scores.assessments}
                        resume={person.certifications.resume}
                        linkedin={person.certifications.linkedin}
                        mockInterview={person.certifications.mockInterview}
                        github={person.certifications.github}
                    />
                ))}
            </div>
        </aside>
    );
}

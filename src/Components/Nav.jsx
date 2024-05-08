

import React from "react";
import data from "../data/data.json";

export default function Nav({ filterStudent, currentCohort }) {
    const uniq = data.map((person) => person.cohort.cohortCode);

    uniq.sort()
    const uniqName = [...new Set(uniq)];
    function filterCohort(arg) {
        filterStudent(arg);
    }

    return (
        <nav>
            <h2> Choose a Class by Start Date</h2>
            <ul>
                <div className="student-cohort">
                    <li>
                        <button className="cohort" onClick={() => filterCohort(null)}>
                            All Students
                        </button>
                    </li>
                    {uniqName.map((element, index) => (
                        <li key={index}>
                            <button className="cohort" onClick={() => filterCohort(element)}>
                                {element}
                            </button>
                        </li>
                    ))}
                </div>
            </ul>
        </nav>
    );
}

"use strict";
const favHobbies = (hobby) => {
    if (typeof hobby === "object" && Array.isArray(hobby)) {
        return hobby.map((hobbies) => {
            console.log(hobbies);
        });
    }
    else {
        console.log(hobby);
    }
};
//favHobbies("cooking");
favHobbies(["cooking", "dancing"]);

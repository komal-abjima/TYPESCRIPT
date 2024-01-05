const favHobbies = (hobby: string | string[]) =>{
    if(typeof hobby === "object" && Array.isArray(hobby)){
        return hobby.map((hobbies) => {  console.log(hobbies);
        })
    }
    else {
        console.log(hobby);
    }

}
//favHobbies("cooking");
favHobbies(["cooking", "dancing"]);
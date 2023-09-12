import inquirer from "inquirer";


function counter(paragraph:string){
    let freespace = paragraph.replace(/\s/g,"");
    return freespace.length
}

async function userinput(counter:(text:string)=>number){
   do { let res = await inquirer.prompt({
        type:"input",
        message:"please enter your paragraph for cunting words",
        name:"user"
    });
    console.log(counter(res.user));
}
while(true);
}

userinput(counter);

let arr = [1, 999, 2, 56, "mithun", 1234, "PW"]


for(let item of arr){
    if (typeof(item) == "string") {
        console.log("found the first string "+ item);
        break
    }
}
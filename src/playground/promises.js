const promise = new Promise((res, err) => {
    setTimeout(() => {
        // res({
        //     name: "shaked",
        //     age: 27
        // });
        err("Something went wrong");
    }, 1500);
});

console.log("before");

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log("error:", error);
})

console.log("after");
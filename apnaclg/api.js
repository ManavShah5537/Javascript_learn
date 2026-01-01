const getData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/comments");
    console.log(response.status);
}
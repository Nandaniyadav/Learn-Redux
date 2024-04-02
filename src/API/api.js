export const getpots = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'GET',
    });
    return await response.json();
}

// ------------------------------------------------

export const getrandomApi = async () =>{
    const response = await fetch("https://randomuser.me/api/",{
        method : 'GET',
    });
    return await response.json();
}
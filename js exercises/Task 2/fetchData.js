const urls = ['https://jsonplaceholder.typicode.com/posts/1','https://jsonplaceholder.typicode.com/posts/3']
    
function fetchDataWithPromise(url) {
        return new Promise((resolve,reject) => {
            fetch(url)
            .then(response => {
                if(!response.ok)
                {
                    throw new Error("Error fetching data for url: "+ url)
                }
            return response.json()
            })
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
}

fetchDataWithPromise(urls[0])
.then(data =>{
     console.log("Fetched data: ",data)})
     .catch(error => {
        console.log("Error: ", error)
     })
    

async function fetchDataWithAsync(url) {
    try {
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error("Error fetching data")
        }
        const data = await response.json()
        return data
        
    }
    catch(error)
    {
        console.log(error)
    }

}
fetchDataWithAsync(urls[1])
.then(data =>  {
    console.log("Fetched data: ",data)
})

Promise.all(
    urls.map(url => fetchDataWithPromise(url)
    .then(data => console.log("Fetched data from urls: ",data))
    .catch(error => console.log("Error: ",error))
))   
form = document.querySelector("#form")
input = document.querySelector("#favnum")
l1 = document.querySelector("#l1")
l2 = document.querySelector("#l2")
l3 = document.querySelector("#l3")
l4 = document.querySelector("#l4")

form.addEventListener("submit", function(e){
    e.preventDefault()

    console.log(input.value)
    let url = `http://numbersapi.com/${input.value}?json`
    let promise = axios.get(url)
    console.log(promise)

    promise
    .then(f1 =>{console.log(f1.data.text);
        l1.append(f1.data.text)
        return axios.get(`${url}`)
    })
    .then(f2 => {console.log(f2.data.text);
        l2.append(f2.data.text)
        return axios.get(`${url}`);
    })
    .then(f3 => {console.log(f3.data.text);
        l3.append(f3.data.text)
        return axios.get(`${url}`);
    })
    .then(f4 => {console.log(f4.data.text)
        l4.append(f4.data.text)
        return axios.get(`${url}`);
    })
    .catch(err => {console.log(err)})
})





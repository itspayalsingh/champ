













let gt= async()=>{
    let mainUrl="https://champion-bu5y.onrender.com/product/all"
    let ans= await fetch(mainUrl,{
        method:'GET',
        headers:{
            'Content-type':'Application/json'
        }
    })
    let res= await ans.json()
    // console.log(res);
    document.querySelector("#right").innerHTML=''
    res.forEach(el => {
      
        document.querySelector("#right").innerHTML+=`
        <div id="${el.id}" >
            <img src="${el.image}" alt="">
            <p class="prod">${el.name}</p>
            <p class="price">${el.price}$</p>
            <p class="rating">${el.rating}<i class="fa-solid fa-star"  id="star" ></i></p>   
        </div>
        ` 
    });

    document.querySelectorAll("#right>div").forEach(el => {
        el.addEventListener("click",productPage)
    });
   
}

gt()











// ------------------------------TRACKER SYSTEM-------------------------------------

let events = [];
let visitorId;
let eventy = []

window.addEventListener("load", async () => {
    try {
        let ans = await fetch("https://champion-bu5y.onrender.com/current", {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        });
        let res = await ans.text();
        visitorId = res;
    } catch (error) {
        console.log(error);
    }
    eventy.push({
        eventType: 'load',
        url: window.location.href,
        time: new Date().getTime(),
        visitorId: visitorId
    });
});


async function storePost(eventpara) {
    try {
        let eventUrl = "https://champion-bu5y.onrender.com/event"
        await fetch(eventUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(eventpara)
        })
        events = []
        // console.log("events before data posted succesfully", events);
        console.log("data posted succesfully");
    } catch (error) {
        alert("not able to post fdata yet")
        console.log("not able to post fdata yet ", error);
    }

}







document.addEventListener('click', async function (e) {
    eventy.push({
        eventType: 'click',
        x: e.pageX,
        y: e.pageY,
        time: new Date().getTime(),
        visitorId: visitorId
    });
    events = eventy
    eventy = []
    storePost(events)
});



document.addEventListener('mousemove', async function (e) {

    eventy.push({
        eventType: 'mousemove',
        x: e.pageX,
        y: e.pageY,
        time: new Date().getTime(),
        visitorId: visitorId
    });

    if (eventy.length > 800) {
        if (events.length == 0) {
            events = eventy;
            eventy = [];
            storePost(events)
        }

    }
    // console.log("last events", eventy)
});


window.addEventListener('scroll', (event) => {
    eventy.push({
        eventType: 'scroll',
        scrollPosition:Math.ceil(window.scrollY),
        time: new Date().getTime(),
        visitorId: visitorId
    })
    // console.log(events)
})
window.addEventListener('beforeunload', async (event) => {
    events = eventy;
    eventy = [];
    storePost(events)
})




















































// low to high price
document.querySelector("#price1").addEventListener("click",async()=>{
   
    eventy.push({
        eventType: 'price1', 
        time: new Date().getTime(),
        visitorId: visitorId
    })
   
   
   
   
   
    let url="https://champion-bu5y.onrender.com/product/sort/lowToHighPrice"
    let ans= await fetch(url,{
        method:'GET',
        headers:{
            'Content-type':'Application/json'
        }
    })
    let res= await ans.json()
    // console.log(res);
    document.querySelector("#right").innerHTML=''
    res.forEach(el => {
      
        document.querySelector("#right").innerHTML+=`
        <div id="${el.id}" >
            <img src="${el.image}" alt="">
            <p class="prod">${el.name}</p>
            <p class="price">${el.price}$</p>
            <p class="rating">${el.rating}<i class="fa-solid fa-star" id="star"></i> </p>   
        </div>
        ` 
    });
   
    document.querySelectorAll("#right>div").forEach(el => {
        el.addEventListener("click",productPage)
    });

})

// high to low price
document.querySelector("#price2").addEventListener("click",async ()=>{

    
    eventy.push({
        eventType: 'price2', 
        time: new Date().getTime(),
        visitorId: visitorId
    })



    let url='https://champion-bu5y.onrender.com/product/sort/highToLowPrice'
    let ans= await fetch(url,{
        method:'GET',
        headers:{
            'Content-type':'Application/json'
        }
    })
    let res= await ans.json()
    // console.log(res);
    document.querySelector("#right").innerHTML=''
    res.forEach(el => {
      
        document.querySelector("#right").innerHTML+=`
        <div id="${el.id}" >
            <img src="${el.image}" alt="">
            <p class="prod">${el.name}</p>
            <p class="price">${el.price}$</p>
            <p class="rating">${el.rating}<i class="fa-solid fa-star" id="star"></i> </p>   
        </div>
        ` 
    });
    document.querySelectorAll("#right>div").forEach(el => {
        el.addEventListener("click",productPage)
    });

})







// rating low to high
document.querySelector("#rate1").addEventListener("click",async ()=>{

    
    eventy.push({
        eventType: 'rate1', 
        time: new Date().getTime(),
        visitorId: visitorId
    })



    let url='https://champion-bu5y.onrender.com/product/sort/lowToHighRating'
    let ans= await fetch(url,{
        method:'GET',
        headers:{
            'Content-type':'Application/json'
        }
    })
    let res= await ans.json()
    // console.log(res);
    document.querySelector("#right").innerHTML=''
    res.forEach(el => {
      
        document.querySelector("#right").innerHTML+=`
        <div id="${el.id}" >
            <img src="${el.image}" alt="">
            <p class="prod">${el.name}</p>
            <p class="price">${el.price}$</p>
            <p class="rating">${el.rating}<i class="fa-solid fa-star" id="star"></i> </p>   
        </div>
        ` 
    });
    document.querySelectorAll("#right>div").forEach(el => {
        el.addEventListener("click",productPage)
    });

})



// rating high to low
document.querySelector("#rate2").addEventListener("click",async ()=>{

    
    eventy.push({
        eventType: 'rate2', 
        time: new Date().getTime(),
        visitorId: visitorId
    })



    let url='https://champion-bu5y.onrender.com/product/sort/highToLowRating'
    let ans= await fetch(url,{
        method:'GET',
        headers:{
            'Content-type':'Application/json'
        }
    })
    let res= await ans.json()
    // console.log(res);
    document.querySelector("#right").innerHTML=''
    res.forEach(el => {
      
        document.querySelector("#right").innerHTML+=`
        <div id="${el.id}" >
            <img src="${el.image}" alt="">
            <p class="prod">${el.name}</p>
            <p class="price">${el.price}$</p>
            <p class="rating">${el.rating}<i class="fa-solid fa-star" id="star"></i> </p>   
        </div>
        ` 
    });
   
    document.querySelectorAll("#right>div").forEach(el => {
        el.addEventListener("click",productPage)
    });
})



// only headphones
document.querySelector("#cat1").addEventListener("click",async ()=>{

    
    eventy.push({
        eventType: 'cat1', 
        time: new Date().getTime(),
        visitorId: visitorId
    })

    let url='https://champion-bu5y.onrender.com/product/category/965539645056974849'
    let ans= await fetch(url,{
        method:'GET',
        headers:{
            'Content-type':'Application/json'
        }
    })
    let res= await ans.json()
    // console.log(res);
    document.querySelector("#right").innerHTML=''
    res.forEach(el => {
      
        document.querySelector("#right").innerHTML+=`
        <div id="${el.id}" >
            <img src="${el.image}" alt="">
            <p class="prod">${el.name}</p>
            <p class="price">${el.price}$</p>
            <p class="rating">${el.rating}<i class="fa-solid fa-star" id="star"></i> </p>   
        </div>
        ` 
    });
   
    document.querySelectorAll("#right>div").forEach(el => {
        el.addEventListener("click",productPage)
    });
})


// only earbuds
document.querySelector("#cat2").addEventListener("click",async ()=>{

    
    eventy.push({
        eventType: 'cat2', 
        time: new Date().getTime(),
        visitorId: visitorId
    })

    let url='https://champion-bu5y.onrender.com/product/category/965539687538950145'
    let ans= await fetch(url,{
        method:'GET',
        headers:{
            'Content-type':'Application/json'
        }
    })
    let res= await ans.json()
    // console.log(res);
    document.querySelector("#right").innerHTML=''
    res.forEach(el => {
      
        document.querySelector("#right").innerHTML+=`
        <div id="${el.id}" >
            <img src="${el.image}" alt="">
            <p class="prod">${el.name}</p>
            <p class="price">${el.price}$</p>
            <p class="rating">${el.rating}<i class="fa-solid fa-star" id="star"></i> </p>   
        </div>
        ` 
    });
   
    document.querySelectorAll("#right>div").forEach(el => {
        el.addEventListener("click",productPage)
    });
})



document.querySelector("#cat3").addEventListener("click",async ()=>{

    
    eventy.push({
        eventType: 'cat3', 
        time: new Date().getTime(),
        visitorId: visitorId
    })


    let url='https://champion-bu5y.onrender.com/product/category/965540062779015169'
    let ans= await fetch(url,{
        method:'GET',
        headers:{
            'Content-type':'Application/json'
        }
    })
    let res= await ans.json()
    // console.log(res);
    document.querySelector("#right").innerHTML=''
    res.forEach(el => {
      
        document.querySelector("#right").innerHTML+=`
        <div id="${el.id}" >
            <img src="${el.image}" alt="">
            <p class="prod">${el.name}</p>
            <p class="price">${el.price}$</p>
            <p class="rating">${el.rating}<i class="fa-solid fa-star" id="star"></i>  </p>   
        </div>
        ` 
    });
   
    document.querySelectorAll("#right>div").forEach(el => {
        el.addEventListener("click",productPage)
    });
})




document.querySelector("#sort1").addEventListener("click",async ()=>{

    
    eventy.push({
        eventType: 'sort1', 
        time: new Date().getTime(),
        visitorId: visitorId
    })

    let url='https://champion-bu5y.onrender.com/product/sort/AtoZ'
    let ans= await fetch(url,{
        method:'GET',
        headers:{
            'Content-type':'Application/json'
        }
    })
    let res= await ans.json()
    // console.log(res);
    document.querySelector("#right").innerHTML=''
    res.forEach(el => {
      
        document.querySelector("#right").innerHTML+=`
        <div id="${el.id}" >
            <img src="${el.image}" alt="">
            <p class="prod">${el.name}</p>
            <p class="price">${el.price}$</p>
            <p class="rating">${el.rating}<i class="fa-solid fa-star" id="star"></i></p>   
        </div>
        ` 
    });
    document.querySelectorAll("#right>div").forEach(el => {
        el.addEventListener("click",productPage)
    });

})




document.querySelector("#sort2").addEventListener("click",async ()=>{

    
    eventy.push({
        eventType: 'sort2', 
        time: new Date().getTime(),
        visitorId: visitorId
    })

    let url='https://champion-bu5y.onrender.com/product//sort/ZtoA'
    let ans= await fetch(url,{
        method:'GET',
        headers:{
            'Content-type':'Application/json'
        }
    })
    let res= await ans.json()
    // console.log(res);
    document.querySelector("#right").innerHTML=''
    res.forEach(el => {
      
        document.querySelector("#right").innerHTML+=`
        <div id="${el.id}" >
            <img src="${el.image}" alt="">
            <p class="prod">${el.name}</p>
            <p class="price">${el.price}$</p>
            <p class="rating">${el.rating}<i class="fa-solid fa-star" id="star"></i></p>   
        </div>
        ` 
    });
   
    document.querySelectorAll("#right>div").forEach(el => {
        el.addEventListener("click",productPage)
    });

})










 



async function productPage(){
    let ans= this.id
    window.location.href=`https://champion-bu5y.onrender.com/public/product.html?id=${ans}`
    //  =`https://champion-bu5y.onrender.com/product/${ans}`
}






































 

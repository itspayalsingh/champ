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


// this is for hover effect for tracker.html
document.querySelector("#userHover").addEventListener("mouseenter", () => {
    eventy.push({
        eventType: 'userHover',
        time: new Date().getTime(),
        visitorId: visitorId
    })
})
 
document.querySelector("#firstBook").addEventListener("mouseenter", () => {
    eventy.push({
        eventType: 'firstBookMouseEnter',
        time: new Date().getTime(),
        visitorId: visitorId
    })
})
document.querySelector("#secondBook").addEventListener("mouseenter", () => {
    eventy.push({
        eventType: 'secondBookMouseEnter',
        time: new Date().getTime(),
        visitorId: visitorId
    })
})
document.querySelector("#thirdBook").addEventListener("mouseenter", () => {
    eventy.push({
        eventType: 'thirdBookMouseEnter',
        time: new Date().getTime(),
        visitorId: visitorId
    })
})
document.querySelector("#firstBook").addEventListener("mouseleave", () => {
    eventy.push({
        eventType: 'firstBookMouseOut',
        time: new Date().getTime(),
        visitorId: visitorId
    })
})
document.querySelector("#secondBook").addEventListener("mouseleave", () => {
    eventy.push({
        eventType: 'secondBookMouseOut',
        time: new Date().getTime(),
        visitorId: visitorId
    })
})
document.querySelector("#thirdBook").addEventListener("mouseleave", () => {
    eventy.push({
        eventType: 'thirdBookMouseOut',
        time: new Date().getTime(),
        visitorId: visitorId
    })
})






 














window.addEventListener("DOMContentLoaded", (e) => {
    let stage = document.querySelector("#mainslide")
    let arr = document.getElementsByTagName("a")
    let over = document.querySelectorAll(".overlay")
    setTimeout(() => {
        over[0].style.opacity = 1;
        over[0].style.transition = "3s";
    }, 100);
    let progressBars = document.querySelectorAll(".bar")
    progressBars[0].style.animation = "progress 4s linear"
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener("animationend", () => {
            // stage.innerHTML+=`${arr[0]}`
            stage.appendChild(arr[0])
            over[i].style.opacity = 1
            over[i].style.transition = "3s"
            progressBars[i].style.animation = "none"
            setTimeout(() => {
                progressBars[i].style.animation = "progress 4s linear"
            }, 0)
        })


        arr[i].addEventListener("animationstart", () => {
            over[i].style.opacity = 0
            over[i].style.transition = "none"
        })

    }
})

document.querySelector("#adminLogin").addEventListener("click", () => {
    window.location.href = '../public/adminLogin.html'
})

document.querySelector("#customerSignup").addEventListener("click", () => {
    window.location.href = '../public/customerSign.html'
})
document.querySelector("#customerLogin").addEventListener("click", () => {
    window.location.href = '../public/customerLogin.html'
})


// SEARCH FUNCTIONALITY
document.querySelector("#mgn").addEventListener("click", () => {
    // console.log("me a");
    document.querySelector("#search").style.display = 'block'
})

// all products
let imag;
async function allP() {
    let all = "https://champion-bu5y.onrender.com/product/all"
    let ans = await fetch(all, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
    let res = await ans.json()
    // console.log(res);
    imag = res;
    // return res;
}
allP()

function search() {
    let l = document.querySelector("#search input").value;
    // console.log(l);

    // let imag=allP()
    // console.log(imag);
    let newdata = imag.filter(function (elem) {
        return elem.name.toLowerCase().includes(l.toLowerCase());
    })
    display(newdata);
}

async function display(newdata) {
    document.querySelector("#lov").innerHTML = ''
    newdata.forEach(el => {
        document.querySelector("#lov").innerHTML += `
    <div>
        <div>
          <img src="${el.image}" alt="">
        </div>

        <div>
        <p>${el.name}</p>
        <p>${el.price} $</p>
        </div>
 
         
    </div>
    `
    });

}











































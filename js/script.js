// http://127.0.0.1:5500/t1.dat?one=1324&two=345

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this.responseText)
    }
}

xhttp.open("get", "http://getpost.itgid.info/index2.php", true);
xhttp.send();

function myFunction(data) {
    console.log(data);
}

let xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function () {
     if (this.readyState == 4 && this.status == 200) {
        myFunction2(this.responseText)
    } 
}
function myFunction2(data) {
    console.log(data);
}
xhttp2.open("post", "http://getpost.itgid.info/index2.php", true);
xhttp2.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhttp2.send('auth=....&action=1');



fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3Dxc8LoG7Gcilzg&action=1').then(data => {
    console.log(data);
    // console.log(data.text());
    data.text().then(data2 => {
        console.log(data2);
    } )
})
fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3Dxc8LoG7Gcilzg&action=1').then(data => {
    console.log(data);
    // console.log(data.text());
    return data.text()
})
    .then(data => {
    console.log(data);
    })

   
fetch("http://getpost.itgid.info/index2.php", {
    method: 'POST', // *GET, POST, PUT, DELETE, etc. 
    body: 'auth=zhrgB3Dxc8LoG7Gcilzg&action=1', // body data type must match "Content-Type" header
})
    .then(response => response.text())
    .then(response => {
        console.log(response);
    })

    // home work

// let out = "";
document.querySelector('.button').onclick = () =>  document.querySelector('.out').innerHTML =   fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3Dxc8LoG7Gcilzg&action=1&name=Serhii')
    .then(data => {
     document.querySelector('.out').textContent = data.statusText + " - " + data.status;
     console.log(data);
    })

document.querySelector('.button2').onclick = () =>  document.querySelector('.out1').innerHTML =  fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3Dxc8LoG7Gcilzg&action=1&name=Serhii')
    .then(data => {
     document.querySelector('.out1').textContent = data.ok;
     console.log(data);
})


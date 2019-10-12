var upload = document.getElementById('upload');
var btn = document.getElementById('btn');
var img = document.getElementsByTagName('img')[0];
var inner = document.getElementById('inner');

upload.onchange = function () {

    // console.log(this.files);

    let fileInfo = this.files[0];

    var reader = new FileReader();

    reader.readAsDataURL(fileInfo);

    reader.onload = function () {
        img.src = this.result;
    }


}

btn.onclick = function () {
    var xhr = new XMLHttpRequest();

    var fd = new FormData(document.getElementById('myform'));


    xhr.upload.onprogress = function (event) {
        inner.style.width = event.loaded / event.total * 100 + '%';
    }

    xhr.open('post', './uploadFile');

    xhr.onload = function (res) {
        // console.log(res.responseText);
    }

    xhr.send(fd);
}
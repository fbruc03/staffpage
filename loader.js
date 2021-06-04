console.log(files);

var body = document.getElementsByTagName("body")[0];

for (let i = 0; i < files.length; i++) {

    var responsive = document.createElement('div');
    responsive.className = 'responsive';

    var gallery = document.createElement('div');
    gallery.className = 'gallery';

    var image = document.createElement('img');
    image.src = 'img/' + files[i];

    var desc = document.createElement('div');
    desc.className = 'desc';
    desc.innerHTML = files[i].split('.')[0];

    body.appendChild(responsive);
    responsive.appendChild(gallery);
    gallery.appendChild(image);
    gallery.appendChild(desc);
}

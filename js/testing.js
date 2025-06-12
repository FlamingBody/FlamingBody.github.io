addEventListener("DOMContentLoaded", () => {   

    const images = imageArray();
    projection = _.setClass('.pictureDecor', 'artwork');
    d = document.getElementById('aboutMe')

    count = 0;

    projection.forEach(e => {
        e.style.backgroundImage = "url(" + images[count] + ")";
        e.innerHTML = '<img src=' + images[count] + ' height="100px"></img>'
        count++;
    });

});
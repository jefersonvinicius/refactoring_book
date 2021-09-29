function renderPhoto(outStream, photo) {
    return "";
}

function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>`);
    renderPhoto(outStream, person.photo);
    emitPhotoData(outStream, person.photo);
}

function listRecentPhotos(outStream, photos) {
    photos
        .filter((p) => p.date > recentDateCutoff())
        .forEach((p) => {
            outStream.write("<div>");
            emitPhotoData(outStream, p);
            outStream.write("</div>");
        });
}

function emitPhotoData(outStream, photo) {
    outStream.write(`<p>title: ${photo.title}</p>\n`);
    outStream.write(`<p>date: ${photo.date.toDateString()}</p>\n`);
    outStream.write(`<p>location: ${photo.location}</p>\n`);
}

function recentDateCutoff() {
    return 1000;
}

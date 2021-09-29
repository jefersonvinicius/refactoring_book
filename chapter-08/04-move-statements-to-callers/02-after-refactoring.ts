function renderPhoto(outStream, photo) {
    return "";
}

function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>`);
    renderPhoto(outStream, person.photo);
    emitPhotoData(outStream, person.photo);
    outStream.write(`<p>location: ${person.photo.location.slice(0, 10)}</p>\n`); // Moved to out of function for has different behavior
}

function listRecentPhotos(outStream, photos) {
    photos
        .filter((p) => p.date > recentDateCutoff())
        .forEach((p) => {
            outStream.write("<div>");
            emitPhotoData(outStream, p);
            outStream.write(`<p>location: ${p.location.slice(0, 2)}</p>\n`); // Moved to out of function for has different behavior
            outStream.write("</div>");
        });
}

function emitPhotoData(outStream, photo) {
    outStream.write(`<p>title: ${photo.title}</p>\n`);
    outStream.write(`<p>date: ${photo.date.toDateString()}</p>\n`);
}

function recentDateCutoff() {
    return 1000;
}

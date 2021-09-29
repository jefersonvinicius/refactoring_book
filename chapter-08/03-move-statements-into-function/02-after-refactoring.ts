function renderPhoto(photo) {
    return "";
}

function renderPerson(outStream, person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(emitPhotoData(person.photo));
    return result.join("\n");
}

function emitPhotoData(photo) {
    return [
        `<p>title: ${photo.title}</p>`, // Move the previous lines duplicated to same local
        `<p>location: ${photo.location}</p>`,
        `<p>date: ${photo.date.toDateString()}</p>`,
    ];
}

function photoDiv(p) {
    return ["<div>", emitPhotoData(p), "</div>"].join("\n");
}

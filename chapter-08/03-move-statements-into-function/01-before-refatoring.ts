function renderPhoto(photo) {
    return "";
}

function renderPerson(outStream, person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(`<p>title: ${person.photo.title}</p>`); // Same of line 15
    result.push(emitPhotoData(person.photo));
    return result.join("\n");
}

function photoDiv(p) {
    return ["<div>", `<p>title: ${p.title}</p>`, emitPhotoData(p), "</div>"].join("\n");
}

function emitPhotoData(photo) {
    const result = [];
    result.push(`<p>location: ${photo.location}</p>`);
    result.push(`<p>date: ${photo.date.toDateString()}</p>`);
    return result.join("\n");
}

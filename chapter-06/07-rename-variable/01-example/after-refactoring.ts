let _title = "untitled";
let result = "";
let objs = [{ articleTitle: "Test 1" }, { articleTitle: "Test 2" }];

objs.forEach((obj) => {
    setTitle(obj["articleTitle"]);
    result += `<h1>${title()}</h1>\n`;
});

console.log(result);

function title() {
    return _title;
}

function setTitle(newTitle: string) {
    _title = newTitle;
}

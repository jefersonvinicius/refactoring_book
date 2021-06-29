let tpHd = "untitled";
let result = "";
let objs = [{ articleTitle: "Test 1" }, { articleTitle: "Test 2" }];

objs.forEach((obj) => {
    result += `<h1>${tpHd}</h1>`;
    tpHd = obj["articleTitle"];
});

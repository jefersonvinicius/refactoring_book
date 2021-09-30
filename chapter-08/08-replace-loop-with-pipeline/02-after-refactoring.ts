const input = `office, country, telephone
Chicago, USA, +1 321 373 1000
Beijing, China, +86 4008 900 505
Bangalore, India, +91 80 4064 9570
Porto Alegre, Brazil, +55 51 3079 3550
Chennai, India, +91 44 660 44766
`;

function acquireData() {
    const lines = input.split("\n");
    return lines
        .slice(1)
        .filter((line) => line.trim() !== "")
        .map((line) => line.split(","))
        .filter((fields) => fields[1].trim() === "India")
        .map((fields) => ({ city: fields[0].trim(), phone: fields[2].trim() }));
}

const result = acquireData();
console.log(result.length === 2);
console.log(result.some((r) => r.city === "Chennai" && r.phone === "+91 44 660 44766"));

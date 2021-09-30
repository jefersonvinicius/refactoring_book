const availableResources = [];
const allocatedResources = [];

function createResource() {
    return 1;
}

function someFunction() {
    let result;
    if (availableResources.length === 0) {
        result = createResource();
        allocatedResources.push(result);
    } else {
        result = availableResources.pop();
        allocatedResources.push(result);
    }

    return result;
}

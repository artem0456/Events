function createSelect(data, option){    
    const select = document.createElement('select');    
    select.size = data.length < option.maxSize 
        ? data.length : option.maxSize;
    
    fillSelect(select, data);
    return select;
}

function fillSelect(select, data) {
    data.forEach((element) => {
        select.add(new Option(element.label, element.id));
    });
}

function refreshSelect(select, data) {
    cleanElement(select);
    fillSelect(select, data);
}

function cleanElement(element) {
    while (element.firstChild)
    element.removeChild(element.firstChild);
}

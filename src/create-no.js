function createNo() {
    const div = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');

    label.setAttribute('for', 'no');
    label.textContent = 'no';
    
    input.setAttribute('id', 'no');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'choice-button');
    input.setAttribute('value', 'no');

    div.appendChild(label);
    div.appendChild(input);

    return div;
}

export default createNo;

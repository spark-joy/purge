function createYes() {
    const div = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');

    label.setAttribute('for', 'yes');
    label.textContent = 'yes';

    input.setAttribute('id', 'yes');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'choice-button');
    input.setAttribute('value', 'yes');

    div.appendChild(label);
    div.appendChild(input);
    
    return div;
}
    
export default createYes;
// add event handler
function submitComment() {
    // gather data
    const inputField = document.getElementById('name');
    const name = inputField.value;
    const inputMessage = document.getElementById('msg');
    const msg = inputMessage.value;
    // create the elements you need
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    //reassigning properties
    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg;
    comment.classList = 'comment';
    console.log(comment, h3, p);
}
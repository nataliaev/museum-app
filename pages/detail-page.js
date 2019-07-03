// add event handler
function submitComment() {
    // gather data
    const inputField = document.getElementById('name');
    let name = inputField.value;
    const inputMessage = document.getElementById('msg');
    let msg = inputMessage.value;

    // form validation
    if (doesNotPassAllValidations(name, msg)) {
        return null;
    }
    
    let nameUpperCase = name.split("");
    nameUpperCase[0] = nameUpperCase[0].toUpperCase();
    name = nameUpperCase.join("");

    // create the elements you need
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    // checking inappropriate language
    let testRegex = /fuck|bitch|shit/;

    if (testRegex.test(msg) == true) {
        msg = 'Warning: this comment has been flagged as offensive! <br></br>' + msg;
        comment.style.backgroundColor = "black";
        comment.style.color = "white";
    }

    //reassigning properties
    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg;
    comment.classList = 'comment';
    comment.appendChild(h3);
    comment.appendChild(p);

    //display elements
    commentSection = document.getElementById('comments');
    commentSection.appendChild(comment);

    // reset values
    inputField.value = null;
    inputMessage.value = null;
}

function doesNotPassAllValidations(name, msg) {
    if (!name) {
        alert('You forgot to fill in your name!');
        return true;
    }

    if (!msg) {
        alert('You forgot to fill in the massage!');
        return true;
    }

    if (msg.length > 280) {  
        alert('Your comment is too long');
        return true;
    }

    return false;
}
let counter = 0;
let likes = 0;
let isPaused = false;
let timer;

document.getElementById('increment').addEventListener('click', () => {
    counter++;
    document.getElementById('counter-display').textContent = counter;
});

document.getElementById('decrement').addEventListener('click', () => {
    counter--;
    document.getElementById('counter-display').textContent = counter;
});

document.getElementById('likes-display').addEventListener('click', () => {
    likes++;
    document.getElementById('likes-display').textContent = `Likes: ${likes}`;
});

document.getElementById('pause-resume').addEventListener('click', () => {
    if (isPaused) {
        resumeCounter();
    } else {
        pauseCounter();
    }
});

document.getElementById('submit-comment').addEventListener('click', () => {
    const comment = document.getElementById('comment-input').value;
    if (comment) {
        addComment(comment);
        document.getElementById('comment-input').value = '';
    }
});

function pauseCounter() {
    clearInterval(timer);
    isPaused = true;
    document.getElementById('pause-resume').textContent = 'Resume';
    document.getElementById('increment').disabled = true;
    document.getElementById('decrement').disabled = true;
}

function resumeCounter() {
    timer = setInterval(() => {
        counter++;
        document.getElementById('counter-display').textContent = counter;
    }, 1000);
    isPaused = false;
    document.getElementById('pause-resume').textContent = 'Pause';
    document.getElementById('increment').disabled = false;
    document.getElementById('decrement').disabled = false;
}

function addComment(comment) {
    const li = document.createElement('li');
    li.textContent = comment;
    document.getElementById('comments-list').appendChild(li);
}

// Start the counter when the page loads
resumeCounter();

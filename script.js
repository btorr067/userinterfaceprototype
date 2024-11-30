// Display a pop-up on clicking cards
document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
        alert(`You clicked on ${card.textContent}`);
    });
});
// Filter Cards by Name
const cards = document.querySelectorAll('.card');
const filtersContainer = document.querySelector('.filters');

if (filtersContainer) {
    const filterInput = document.createElement('input');
    filterInput.type = 'text';
    filterInput.placeholder = 'Filter cards by name...';
    filtersContainer.appendChild(filterInput);

    filterInput.addEventListener('input', (e) => {
        const filterText = e.target.value.toLowerCase();
        cards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            card.style.display = cardText.includes(filterText) ? 'block' : 'none';
        });
    });
}
// Display details when a news article is clicked
const newsItems = document.querySelectorAll('.news-item');

newsItems.forEach((item) => {
    item.addEventListener('click', () => {
        alert(`More details about: ${item.textContent}`);
    });
});
// Chat room joining
const chatRooms = document.querySelectorAll('.chat-room');

chatRooms.forEach((room) => {
    room.addEventListener('click', () => {
        alert(`You joined ${room.textContent.trim()}!`);
    });
});
// Login and Signup Modals
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const closeLogin = document.getElementById('close-login');
const closeSignup = document.getElementById('close-signup');

// Open Login Modal
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

// Open Signup Modal
signupBtn.addEventListener('click', () => {
    signupModal.style.display = 'flex';
});

// Close Login Modal
closeLogin.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Close Signup Modal
closeSignup.addEventListener('click', () => {
    signupModal.style.display = 'none';
});

// Close Modals When Clicking Outside Content
window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target === signupModal) {
        signupModal.style.display = 'none';
    }
});

// Form Submission
document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault(); 
    alert('Login functionality coming soon!');
    loginModal.style.display = 'none';
});

document.getElementById('signup-form').addEventListener('submit', (event) => {
    event.preventDefault(); 
    alert('Sign Up functionality coming soon!');
    signupModal.style.display = 'none';
});

// Function to create confetti
        function createConfetti() {
            const confettiContainer = document.querySelector('.confetti-container');
            const colors = ['#FF69B4', '#FFD700', '#1E90FF', '#32CD32', '#FF4500', '#4B0082'];

            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDelay = `${Math.random() * 3}s`;
                confetti.style.animationDuration = `${3 + Math.random() * 2}s`;
                confettiContainer.appendChild(confetti);
            }
        }

        createConfetti();

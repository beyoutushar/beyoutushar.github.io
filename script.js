// Animate projects on scroll
document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
    
    const animateOnScroll = () => {
        projects.forEach(project => {
            const projectPosition = project.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (projectPosition < screenPosition) {
                project.classList.add('animate__fadeInUp');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger on load
});
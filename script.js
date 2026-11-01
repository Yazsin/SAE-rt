const bouton = document.getElementById('bouton');
const partieCachee = document.getElementById('partie_cachee');

bouton.addEventListener('click', function() {
    
    if (partieCachee.style.display === 'none' || partieCachee.style.display === '') {
        partieCachee.style.display = 'block'; 
        bouton.textContent = 'Voir moins';    
    } 
    else {
        partieCachee.style.display = 'none';   
        bouton.textContent = 'Voir plus';    
    }
});

// Tilføj eventlisteners til alle supervisor, maskiner og kurser knapper
const buttons = document.querySelectorAll('.filter-option');
const submitButton = document.getElementById('submit');

// Klik-hændelse: Skift "active" klassen
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Hent typen fra data-attributten (supervisor, maskiner, kurser)
        const type = button.getAttribute('data-type');

        // Fjern "active" fra alle knapper i samme gruppe (samme type)
        buttons.forEach(btn => {
            if (btn.getAttribute('data-type') === type) {
                btn.classList.remove('active');
            }
        });

        // Tilføj "active" til den valgte knap
        button.classList.add('active');
    });
});

// Klik på "Søg tider" knappen
submitButton.addEventListener('click', () => {
    // Tjek, om der er valgt en supervisor og en maskine
    const selectedSupervisor = document.querySelector('.filter-option.active[data-type="supervisor"]');
    const selectedMachine = document.querySelector('.filter-option.active[data-type="maskiner"]');

    if (!selectedSupervisor || !selectedMachine) {
        alert("Du skal vælge både en supervisor og en maskine!");
      } else {
        // Naviger til kalender-siden
        window.location.href ="kalender.html";
      }
    });

document.addEventListener("DOMContentLoaded", function () {
    const selectedOptions = {
      supervisor: null,
      machine: null,
      course: null,
    };
  
    const buttons = document.querySelectorAll(".filter-option");
  
    // Event listener til knapper
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const type = button.dataset.type;
  
        // Fjern tidligere valg
        buttons.forEach((btn) => {
          if (btn.dataset.type === type) btn.classList.remove("selected");
        });
  
        // Marker nuværende valg
        button.classList.add("selected");
        selectedOptions[type] = button.dataset.value;
      });
    });
  
    // Håndter "Søg tider"-knappen
    document.getElementById("submit").addEventListener("click", function () {
      if (!selectedOptions.supervisor || !selectedOptions.machine) {
        alert("Du skal vælge både en supervisor og en maskine!");
        return;
      }
  
      // Vælg en kalender baseret på valg
      const calendars = {
        "Michael A.": {
          "3D-print": "calendar1.jpg",
          Laserskærer: "calendar2.jpg",
          "T-shirtprint": "calendar3.jpg",
        },
        "Michael B.": {
          "3D-print": "calendar4.jpg",
          Laserskærer: "calendar5.jpg",
          "T-shirtprint": "calendar6.jpg",
        },
        "Mads H.": {
          "3D-print": "calendar7.jpg",
          Laserskærer: "calendar8.jpg",
          "T-shirtprint": "calendar9.jpg",
        },
      };
  
      const selectedCalendar =
        calendars[selectedOptions.supervisor][selectedOptions.machine];
  
      // Vis kalender
      document.getElementById("calendar").src = selectedCalendar;
      document.getElementById("result-container").style.display = "block";
    });
  });
  
  
  
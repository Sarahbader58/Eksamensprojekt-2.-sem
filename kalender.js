document.addEventListener("DOMContentLoaded", () => {
    const calendarDays = document.querySelectorAll(".calendar-day");
    const bookButton = document.getElementById("book-button");
    let selectedDate = null;
  
    // Tilføj klikfunktion til hver dato
    calendarDays.forEach(day => {
      day.addEventListener("click", () => {
        // Fjern tidligere markering
        calendarDays.forEach(d => d.classList.remove("selected"));
  
        // Marker den valgte dato
        day.classList.add("selected");
        selectedDate = day.textContent.trim();
  
        // Gør book-knappen synlig
        bookButton.style.display = "block";
      });
    });
  
    // Håndter klik på book-knappen
    bookButton.addEventListener("click", () => {
      if (selectedDate) {
        // Naviger til profilen med den valgte tid
        window.location.href = `/profile.html?tid=${encodeURIComponent(selectedDate)}`;
      }
    });
  });
  
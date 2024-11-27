const calendarDiv = document.getElementById('calendar');
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const daysInMonth = new Date(year, month + 1, 0).getDate();

const disponibilidad = {
    "2024-12-01": true,
    "2024-12-02": true,
    "2024-12-03": false,
    "2024-12-04": true,
  };
  
for (let i = 1; i <= daysInMonth; i++) {
    const currentDate = new Date();
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
    const formattedDate = date.toISOString().split('T')[0];
  
    const dayDiv = document.createElement('div');
    dayDiv.className = 'day';
    dayDiv.textContent = i;
  
    if (date < today) {
        dayDiv.classList.add('past');
    } else if (disponibilidad[formattedDate] === false) {
        dayDiv.classList.add('unavailable');
    } else {
        dayDiv.classList.add('available');
    }
  
    calendarDiv.appendChild(dayDiv);
}  

let selectedArrival = null;
let selectedDeparture = null;

function selectDate(date) {
  if (!selectedArrival || (selectedArrival && selectedDeparture)) {
    // LLEGADA
    selectedArrival = date;
    selectedDeparture = null;
    highlightRange();
  } else {
    // SALIDA
    selectedDeparture = date;
    highlightRange();
  }
}

function highlightRange() {
    const days = document.querySelectorAll('.day');
    days.forEach((day) => {
      const dayText = day.textContent.padStart(2, '0');
      const dayDate = `${year}-${String(month + 1).padStart(2, '0')}-${dayText}`;
  
      if (selectedArrival && dayDate >= selectedArrival && (!selectedDeparture || dayDate <= selectedDeparture)) {
        day.classList.add('selected');
      } else {
        day.classList.remove('selected');
      }
    });
  }
// Datos de disponibilidad simulados
const disponibilidad = {
    "2024-12-01": false,
    "2024-12-02": true,
    "2024-12-03": true,
    "2024-12-04": false,
  };
  
  // Generar calendario
  const calendarDiv = document.getElementById('calendar');
  const currentDate = new Date();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
    const formattedDate = date.toISOString().split('T')[0];
  
    const dayDiv = document.createElement('div');
    dayDiv.className = 'day';
    dayDiv.textContent = i;
  
    if (disponibilidad[formattedDate] === false) {
      dayDiv.classList.add('unavailable');
    } else {
      dayDiv.classList.add('available');
    }
  
    calendarDiv.appendChild(dayDiv);
  }
  
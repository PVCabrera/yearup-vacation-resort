// searches the HTML and adds assigns
const bookingForm = document.getElementById("overnight-form");
let checkIn = document.getElementById("in-date");
let checkOut = document.getElementById("out-date");

function getRoomDate(checkIn, checkOut) {
  date.preventDefault();
  const startDate = new Date("2023-01-01");
  const endDate = new Date("2023-06-20");

  if (checkIn >= startDate && date <= endDate) {
    console.log(`Original room cost:  $ ${150.00}`)
  }
  if (checkOut <= startDate && date >= endDate) {
    return 250.00(`Original room cost:  $ ${150.00}`)
  }
}


bookingForm.onsubmit = getRoomDate();

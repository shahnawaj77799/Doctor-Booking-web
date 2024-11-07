document.addEventListener('DOMContentLoaded', () => {
    const bookings = [
        {
            id: 1,
            patientName: "shahnawaj ali",
            location: "Delhi",
            doctorType: "Cardiologist",
            healthDiseases: "Heart Disease",
            date: "2023-07-20",
            time: "10:00 AM"
        },
        {
            id: 2,
            patientName: "rajesh varma",
            location: "Bhopal",
            doctorType: "Dermatologist",
            healthDiseases: "Skin Allergy",
            date: "2023-07-21",
            time: "11:00 AM"
        }
        
    ];

    const bookingTable = document.getElementById('bookingTable').getElementsByTagName('tbody')[0];
    const bookingForm = document.getElementById('bookingForm');

    const updateTable = () => {
        bookingTable.innerHTML = "";
        bookings.forEach(booking => {
            const row = bookingTable.insertRow();
            row.insertCell(0).innerText = booking.id;
            row.insertCell(1).innerText = booking.patientName;
            row.insertCell(2).innerText = booking.location;
            row.insertCell(3).innerText = booking.doctorType;
            row.insertCell(4).innerText = booking.healthDiseases;
            row.insertCell(5).innerText = booking.date;
            row.insertCell(6).innerText = booking.time;
        });
    };

    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const newBooking = {
            id: bookings.length + 1,
            patientName: bookingForm.patientName.value,
            location: bookingForm.location.value,
            doctorType: bookingForm.doctorType.value,
            healthDiseases: bookingForm.healthDiseases.value,
            date: bookingForm.date.value,
            time: bookingForm.time.value
        };

        bookings.push(newBooking);
        updateTable();
        bookingForm.reset();
    });

    updateTable();
});

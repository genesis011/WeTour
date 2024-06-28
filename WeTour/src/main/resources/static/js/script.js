document.addEventListener('DOMContentLoaded', function () {
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');
    const checkinCalendarContainer = document.querySelector('.calendar-container');
    const checkinCalendar = document.getElementById('checkin-calendar');
    const checkoutCalendar = document.getElementById('checkout-calendar');
    //const selectedDates = document.getElementById('selected-dates'); //해지시 캘린더 선택할때마다 캘린더 닫힘

    let checkinDate = null;
    let checkoutDate = null;

    function toggleCalendar() {
        checkinCalendarContainer.classList.toggle('d-none');
    }

    checkinInput.addEventListener('focus', () => {
        toggleCalendar();
    });

    checkoutInput.addEventListener('focus', () => {
        toggleCalendar();
    });

    function createCalendar(element, dateCallback) {
        const currentDate = new Date();
        let year = currentDate.getFullYear();
        let month = currentDate.getMonth();

        function renderCalendar() {
            element.innerHTML = '';
            const firstDay = new Date(year, month, 1).getDay();
            const lastDate = new Date(year, month + 1, 0).getDate();
            const calendarTable = document.createElement('table');
            calendarTable.classList.add('table', 'table-borderless');

            const headerRow = document.createElement('tr');
            ['일', '월', '화', '수', '목', '금', '토'].forEach(day => {
                const th = document.createElement('th');
                th.innerText = day;
                headerRow.appendChild(th);
            });
            calendarTable.appendChild(headerRow);

            let dateRow = document.createElement('tr');
            for (let i = 0; i < firstDay; i++) {
                const emptyCell = document.createElement('td');
                dateRow.appendChild(emptyCell);
            }

            for (let day = 1; day <= lastDate; day++) {
                if ((firstDay + day - 1) % 7 === 0) {
                    calendarTable.appendChild(dateRow);
                    dateRow = document.createElement('tr');
                }

                const dateCell = document.createElement('td');
                dateCell.innerText = day;
                dateCell.classList.add('date-cell');
                dateCell.addEventListener('click', () => {
                    const selectedDate = new Date(year, month, day);
                    dateCallback(selectedDate);
                    renderCalendar();
                    highlightSelectedDates();
                });
                dateRow.appendChild(dateCell);
            }

            calendarTable.appendChild(dateRow);
            element.appendChild(calendarTable);
        }

        function highlightSelectedDates() {
            const cells = element.querySelectorAll('.date-cell');
            cells.forEach(cell => {
                const cellDate = new Date(year, month, cell.textContent);
                cell.classList.remove('selected', 'range');
                if (checkinDate && cellDate.toDateString() === checkinDate.toDateString()) {
                    cell.classList.add('selected');
                }
                if (checkoutDate && cellDate.toDateString() === checkoutDate.toDateString()) {
                    cell.classList.add('selected');
                }
                if (checkinDate && checkoutDate && cellDate > checkinDate && cellDate < checkoutDate) {
                    cell.classList.add('range');
                }
            });
        }

        renderCalendar();
    }

    createCalendar(checkinCalendar, function (date) {
        checkinDate = date;
        checkinInput.value = `${checkinDate.getMonth() + 1}월 ${checkinDate.getDate()}일`;
        if (checkoutDate && checkoutDate <= checkinDate) {
            checkoutDate = null;
            checkoutInput.value = '';
        }
        displaySelectedDates();
    });

    createCalendar(checkoutCalendar, function (date) {
        if (checkinDate && date > checkinDate) {
            checkoutDate = date;
            checkoutInput.value = `${checkoutDate.getMonth() + 1}월 ${checkoutDate.getDate()}일`;
        } else {
            alert('체크아웃 날짜는 체크인 날짜보다 이후여야 합니다.');
        }
        displaySelectedDates();
    });

    function displaySelectedDates() {
        selectedDates.innerHTML = `
            <p>체크인: ${checkinDate ? `${checkinDate.getMonth() + 1}월 ${checkinDate.getDate()}일` : ''}</p>
            <p>체크아웃: ${checkoutDate ? `${checkoutDate.getMonth() + 1}월 ${checkoutDate.getDate()}일` : ''}</p>
        `;
    }

    document.addEventListener('click', (event) => {
        if (!checkinCalendarContainer.contains(event.target) && !checkinInput.contains(event.target) && !checkoutInput.contains(event.target)) {
            checkinCalendarContainer.classList.add('d-none');
        }
    });
});

//================================ 여행지 ================================
	function showDestinationOptions() {
		document.getElementById('destination-options').style.display = 'block';
	}

	function search() {
		const destination = document.getElementById('destination').value;
		const checkin = document.getElementById('checkin').value;
		const checkout = document.getElementById('checkout').value;
		const guests = document.getElementById('guests').value;

		alert(`Searching for: \nDestination: ${destination} \nCheck-in: ${checkin} \nCheck-out: ${checkout} \nGuests: ${guests}`);
	}

	document.addEventListener('click', function(event) {
		const destinationGroup = document.getElementById('destination-group');
		const isClickInside = destinationGroup.contains(event.target);

		if (!isClickInside) {
			document.getElementById('destination-options').style.display = 'none';
		}
	});

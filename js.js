function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

window.onload = function() {
    const currentDate = new Date();
    const date70DaysAgo = new Date();
    date70DaysAgo.setDate(currentDate.getDate() - 70);

    const formattedDate = formatDate(date70DaysAgo);

    const dateElements = document.querySelectorAll('[id^="date70DaysAgo"]');
    dateElements.forEach(element => {
        element.innerText = formattedDate;
    });
};

// JavaScript code for Tea Time Tracker

document.addEventListener('DOMContentLoaded', function () {
    const teaList = document.getElementById('teaList');

    // Mock data
    const teas = [
        { name: 'Green Tea', brewTime: '3 minutes' },
        { name: 'Black Tea', brewTime: '5 minutes' },
        { name: 'Herbal Tea', brewTime: '7 minutes' }
    ];

    // Display teas
    teas.forEach(tea => {
        const teaItem = document.createElement('div');
        teaItem.classList.add('tea-item');
        teaItem.innerHTML = `
            <span>${tea.name}: Brew Time - ${tea.brewTime}</span>
        `;
        teaList.appendChild(teaItem);
    });
});

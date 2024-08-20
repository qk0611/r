document.addEventListener('DOMContentLoaded', function() {
    const suppliersList = document.getElementById('suppliers-list');
    const clientsList = document.getElementById('clients-list');

    function addTenderToList(tender, list) {
        const tenderItem = document.createElement('li');
        tenderItem.innerHTML = `
            <h3>Товар: ${tender.product}</h3>
            <p><strong>Цена:</strong> ${tender.priceDuration} ${tender.currency}</p>
            <p><strong>Срок:</strong> ${tender.endDate}</p>
            <p><strong>Описание:</strong> ${tender.description}</p>
        `;
        list.appendChild(tenderItem);
        console.log('Tender added to list:', tender);
    }

    function loadTenders(storageKey, list) {
        try {
            const tenders = JSON.parse(localStorage.getItem(storageKey)) || [];
            tenders.forEach(tender => addTenderToList(tender, list));
            console.log(`${storageKey} loaded:`, tenders);
        } catch (error) {
            console.error(`Error loading ${storageKey}:`, error);
        }
    }

    loadTenders('suppliers', suppliersList);
    loadTenders('customers', clientsList);
});

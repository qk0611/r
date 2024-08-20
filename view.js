document.addEventListener('DOMContentLoaded', function() {
    const supplierForm = document.getElementById('supplier-form');
    const clientForm = document.getElementById('client-form');

    function saveTender(tender, storageKey) {
        try {
            let tenders = JSON.parse(localStorage.getItem(storageKey)) || [];
            tenders.push(tender);
            localStorage.setItem(storageKey, JSON.stringify(tenders));
            console.log(`Tender saved in ${storageKey}:`, tender);
        } catch (error) {
            console.error('Error saving tender:', error);
        }
    }

    function handleFormSubmit(form, storageKey) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            try {
                const tender = {
                    product: form.querySelector('[name="product"], [name="supplier-product"], [name="client-product"]').value,
                    priceDuration: form.querySelector('[name="priceDuration"], [name="supplier-price"], [name="client-price"]').value,
                    currency: form.querySelector('[name="currency"], [name="supplier-currency"], [name="client-currency"]').value,
                    endDate: form.querySelector('[name="endDate"], [name="supplier-endDate"], [name="client-endDate"]').value,
                    description: form.querySelector('[name="description"], [name="supplier-description"], [name="client-description"]').value
                };
                saveTender(tender, storageKey);
                form.reset();
            } catch (error) {
                console.error('Error adding tender:', error);
            }
        });
    }

    handleFormSubmit(supplierForm, 'suppliers');
    handleFormSubmit(clientForm, 'customers');
});

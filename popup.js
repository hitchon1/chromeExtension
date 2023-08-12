document.getElementById('submitLead').addEventListener('click', function() {
    // Your Integromat Webhook URL goes here
    var webhookURL = "https://hook_insertURL";

    var leadData = {
        leadName: document.getElementById('leadName').value,
        company: document.getElementById('company').value,
        email: document.getElementById('email').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        product: document.getElementById('product').value,
        dealSize: document.getElementById('dealSize').value,
        leadSource: document.getElementById('leadSource').value,
        contactDate: document.getElementById('contactDate').value,
        notes: document.getElementById('notes').value
    };

    fetch(webhookURL, {
        method: 'POST',
        body: JSON.stringify(leadData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
});

function handleCallClick() {
    const userConfirmed = confirm("You are being redirected to call us. Do you want to proceed?");
    if (userConfirmed) {
        window.location.href = "tel:+1234567890"; // Replace with your phone number
    }
}

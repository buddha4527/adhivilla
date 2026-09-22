document.getElementById("bookingForm").addEventListener("submit",function(e){
 e.preventDefault();
 const phone="919946914766";
 const name=document.getElementById("name").value.trim();
 const contact=document.getElementById("phone").value.trim();
 const ci=document.getElementById("checkin").value;
 const co=document.getElementById("checkout").value;
 const guests=document.getElementById("guests").value.trim();
 const interest=document.getElementById("interest").value;
 const message=document.getElementById("message").value.trim();
 const text=`Hello Adhi Villa!%0A%0AName: ${name}%0AWhatsApp/Phone: ${contact}%0ACheck-in: ${ci||"Not specified"}%0ACheck-out: ${co||"Not specified"}%0AGuests: ${guests||"Not specified"}%0AInterested in: ${interest}%0AMessage: ${message||"—"}%0A%0AI'd like to know availability and details.`;
 window.open(`https://wa.me/${phone}?text=${text}`,"_blank");
});
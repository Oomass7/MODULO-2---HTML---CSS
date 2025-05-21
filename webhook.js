const webhookURL = "https://discord.com/api/webhooks/1374576815116521482/8_y1fBW1z7Q2pKS4KU8iRhH_81kQeUml4wpTR6_o2-O8d8XCYaRxTjggYsj-iAp6HAFf";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("msg").value.trim();

    if (!name || !email || !message) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const payload = {
      content: `📬 **Nuevo mensaje desde el formulario:**\n\n👤 **Nombre:** ${name}\n📧 **Email:** ${email}\n📝 **Mensaje:** ${message}`
    };

    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert("Mensaje enviado correctamente ✅");
        form.reset();
      } else {
        alert("Hubo un error al enviar el mensaje ❌");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Error de conexión.");
    }
  });
});
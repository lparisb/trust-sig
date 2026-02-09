const firmas = {
  ernesto: {
    desktop: `
<table width="450" cellspacing="0" cellpadding="0" border="0">
  <tr>
    <td style="padding:15px 5px 0 0;">
      <img src="https://trust.com.co/wp-content/uploads/2025/10/wplogotrust.png" width="200">
    </td>
    <td>
      <table style="font-family:Arial,Helvetica,sans-serif;font-size:90%;">
        <tr><td><b>ERNESTO BORDA MEDINA</b></td></tr>
        <tr><td>Director Ejecutivo</td></tr>
        <tr><td>celular: <a href="tel:+573102926035">+57 310 292 6035</a></td></tr>
        <tr><td>web: <a href="https://www.trust.com.co">www.trust.com.co</a></td></tr>
      </table>
    </td>
  </tr>
</table>
`,
    mobile: `
<table width="450" cellspacing="0" cellpadding="0" border="0">
  <tr>
    <td>
      <table style="font-family:Arial,Helvetica,sans-serif;font-size:90%;">
        <tr><td><b>ERNESTO BORDA MEDINA</b></td></tr>
        <tr><td>Director Ejecutivo | TRUST</td></tr>
        <tr><td>celular: <a href="tel:+573102926035">+57 310 292 6035</a></td></tr>
        <tr><td>web: <a href="https://www.trust.com.co">www.trust.com.co</a></td></tr>
      </table>
    </td>
  </tr>
</table>
`
  }
};

function cargarFirma() {
  const p = document.getElementById("persona").value;
  document.getElementById("firma-desktop").innerHTML = firmas[p]?.desktop || "";
  document.getElementById("firma-mobile").innerHTML = firmas[p]?.mobile || "";
}

function copiar(id) {
  const range = document.createRange();
  range.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  alert("Firma copiada. Pégala directamente en tu correo.");
}

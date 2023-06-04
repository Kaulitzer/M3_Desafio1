document.querySelector("#calcularBtn").addEventListener("click", function() {
    var cantidad = parseInt(document.querySelector("#cantidad").value);
    var color = document.querySelector("#color").value;
    var precioUnitario = 400000;
    var valorTotal = cantidad * precioUnitario;
  
    document.querySelector("#resumen").innerHTML = `
      <p>Valor total: $${valorTotal}</p>
      <p>Cantidad: ${cantidad}</p>
      <div class="color-resumen">
        <p>Color:</p>
        <div id="colorCircle"></div>
      </div>
    `;
  
    document.querySelector("#colorCircle").style.backgroundColor = color;
  });
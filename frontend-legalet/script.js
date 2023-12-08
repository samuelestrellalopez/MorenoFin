

document.getElementById('contratoForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(this);

  // Imprime en la consola para verificar el contenido de formData
  console.log(formData);

  fetch('http://localhost:3306/api/contratos', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    alert('Contrato subido exitosamente');
  })
  .catch(error => {
    console.error('Error al subir el contrato:', error);
    alert('Error al subir el contrato');
  });
});



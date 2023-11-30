// script.js

async function subirContrato() {
  const pdfContrato = document.getElementById('pdfContrato').files[0];

  try {
    const formData = new FormData();
    formData.append('pdfContrato', pdfContrato);
    formData.append('estado', 'pendiente'); // Estado por defecto

    const response = await axios.post('http://localhost:3306/api/contratos', formData);

    if (response.status === 200) {
      alert('Contrato subido correctamente. ID del Contrato: ' + response.data.contratoId);

      // Mostrar la previsualización del contrato
      const previewFrame = document.getElementById('previewFrame');
      previewFrame.src = response.data.contratoPath;
    } else {
      alert('Error al subir el contrato.');
    }
  } catch (error) {
    console.error(error);
    alert('Error al subir el contrato. Por favor, intenta nuevamente.');
  }
}

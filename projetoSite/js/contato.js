function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }
  
  const form = document.querySelector('form');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nomeContato').value;
    const sobrenome = document.getElementById('sobrenomeContato').value;
    const email = document.getElementById('emailContato').value;
    const titulo = document.getElementById('formGroupExampleInput').value;
    const assunto = document.getElementById('assunto').value;
  
    const formData = {
      id: generateUniqueId(),
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      titulo: titulo,
      assunto: assunto
    };
  
    console.log(formData);
  });
  
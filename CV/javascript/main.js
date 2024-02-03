window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var pageAccueil = document.querySelector('#page-accueil');
  var position = pageAccueil.getBoundingClientRect();

  if (position.bottom <= 0) {
      navbar.classList.remove('navbar-hidden');
  } else {
      navbar.classList.add('navbar-hidden');
  }
});

function mail() {
  var nom = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;
  var mail = document.getElementById("mail").value;
  var msg = document.getElementById("msg").value;

  if (nom == '') {
      alert("Merci de rentrer votre nom");

  } else if (prenom == '') {
      alert("Merci de rentrer votre prenom");
  } else if (mail == '') {
      alert("Merci de rentrer votre adresse mail");
  } else if (msg == '') {
      alert("Merci de rentrer votre contenu du message");
  } else {
      var email = document.createElement('a');
      email.href = `mailto:${mail}?subject=Mail from ${prenom} ${nom}, &body=${msg}`;
      email.click();
  }
}
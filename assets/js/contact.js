/* Contact form → validuscast@gmail.com via FormSubmit (https://formsubmit.co)
   GitHub Pages is static, so a form service relays the message to the inbox.

   FIRST-TIME SETUP: the very first message sent from the live site triggers an
   activation e-mail from FormSubmit to validuscast@gmail.com. Click "Activate"
   in that e-mail once; every message after that is delivered normally.

   Optional: after activation FormSubmit e-mails you a random alias string.
   Replace the address in FORM_ENDPOINT (and in contact.html's form action)
   with that alias so the e-mail address is not visible in the page source. */
(function () {
  var FORM_ENDPOINT = 'https://formsubmit.co/ajax/validuscast@gmail.com';

  var form = document.getElementById('contact-form');
  if (!form) return;
  var status = document.getElementById('form-status');
  var btn = form.querySelector('button[type="submit"]');

  function setStatus(msg, cls) {
    status.textContent = msg;
    status.className = 'form-status' + (cls ? ' ' + cls : '');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form._honey && form._honey.value) return; // bot
    var data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
      _subject: 'New message from validuscast.github.io — ' + form.name.value.trim(),
      _replyto: form.email.value.trim(),
      _template: 'table',
      _captcha: 'false'
    };
    if (!data.name || !data.email || !data.message) {
      setStatus('Please fill in your name, e-mail and message.', 'err');
      return;
    }
    btn.disabled = true;
    setStatus('Sending…');
    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (res) {
        if (res.ok && String(res.j.success) !== 'false') {
          form.reset();
          setStatus('Thank you — your message is on its way. We will get back to you soon.', 'ok');
        } else {
          throw new Error(res.j && res.j.message ? res.j.message : 'Request failed');
        }
      })
      .catch(function () {
        setStatus('Something went wrong. Please e-mail us directly at validuscast@gmail.com.', 'err');
      })
      .finally(function () { btn.disabled = false; });
  });

  if (/[?&]sent=1/.test(location.search)) setStatus('Thank you — your message is on its way.', 'ok');
})();

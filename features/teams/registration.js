(() => {
  "use strict";
  // The password guard runs first and resumes submission only after its check.
  document.addEventListener('submit',event=>{
    const form=event.target;if(!(form instanceof HTMLFormElement))return;
    const input=form.querySelector('input[name="laes_whatsapp"]');if(!input||!input.value.trim())return;
    const raw=input.value.trim(),digits=raw.replace(/\D/g,'');
    if(!/^[+0-9 ()-]{0,30}$/.test(raw)||digits.length<10||digits.length>15){event.preventDefault();event.stopImmediatePropagation();input.setCustomValidity('Confira o WhatsApp com DDD e código do país.');input.reportValidity();input.addEventListener('input',()=>input.setCustomValidity(''),{once:true});return;}
  },true);
  const incoming=new URLSearchParams(location.search).get('convite');
  if(incoming&&/^[a-f0-9]{64}$/.test(incoming))sessionStorage.setItem('laes-team-link',incoming);
})();

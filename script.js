 const language = {
      eng: {
        text: "Welcome to the Multi-Lingual Website! You can choose any language using the buttons above!",
        label: "English"
      },
      es: {
        text: "¡Bienvenido al portal Multi-Lingual! ¡Puedes elegir cualquier idioma usando los botones de arriba!",
        label: "Spanish"
      },
      hin: {
        text: "Multi-Lingual Website पर आपका स्वागत है! आप ऊपर दिए गए बटन का उपयोग करके किसी भी भाषा को चुन सकते हैं!",
        label: "Hindi"
      },
      fr: {
        text: "Bienvenue sur le site web multilingue ! Vous pouvez choisir n'importe quelle langue en utilisant les boutons ci-dessus !",
        label: "French"
      },
      de: {
        text: "Willkommen auf der multilingualen Website! Sie können jede Sprache auswählen, indem Sie die Schaltflächen oben verwenden!",
        label: "German"
      },
      zh: {
        text: "欢迎来到多语言网站！您可以使用上面的按钮选择任何语言！",
        label: "Hausa"
      }
      


    };
 
    function changeLanguage(lang) {
      const content = document.getElementById('siteContent');
      content.style.opacity = '0';
      setTimeout(() => {
        content.textContent = language[lang].text;
        document.getElementById('langLabel').textContent = language[lang].label;
        content.style.opacity = '1';
      }, 200);
      document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      document.getElementById('btn-' + lang).classList.add('active');
      location.hash = lang;
    }
 
    if (window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      if (language[hash]) changeLanguage(hash);
    }
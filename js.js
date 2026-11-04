const audio = document.getElementById('cancion');
        const btn = document.getElementById('btnPlay');

        const TIEMPO_INICIO = 204; // 3:24

        let reproduciendo = false;

        btn.addEventListener('click', () => {
            if (!reproduciendo) {
                audio.currentTime = TIEMPO_INICIO;
                audio.play();
                reproduciendo = true;
                btn.textContent = '⏸ tocame para parar';
            } else {
                audio.pause();
                audio.currentTime = TIEMPO_INICIO;
                reproduciendo = false;
                btn.textContent = '▶ tocame para iniciar';
            }
        });

        audio.addEventListener('timeupdate', () => {
            if (audio.currentTime >= TIEMPO_FIN && reproduciendo) {
                audio.pause();
                audio.currentTime = TIEMPO_INICIO;
                reproduciendo = false;
                btn.textContent = '▶ tocame para iniciar';
            }
        });
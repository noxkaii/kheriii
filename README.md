# PLAYER 2: KHERI 💗

Una página romántica retro/pixel-art, adaptable a celular y escritorio.

## Archivos
- `index.html`: contenido y textos.
- `style.css`: diseño visual.
- `script.js`: botones, mensajes secretos, minijuego, fotos temporales, playlist y audio local.
- `assets/`: coloca aquí las fotos y la nota de voz para publicarlas con la web.

## Personalización básica
1. Abre `index.html` en un editor de texto (por ejemplo, Bloc de notas o Visual Studio Code).
2. Busca los párrafos de la carta y cambia las frases para que suenen a ti.
3. Puedes editar los mensajes de los seis botones buscando `data-message="..."`.
4. Para cambiar el apodo, busca `mi niño` en `index.html` y reemplázalo donde quieras.
5. Los enlaces de Google Fonts son opcionales; si no hay internet, la página usará fuentes alternativas.

## Cómo agregar fotos que Kheri sí pueda ver
La selección de fotos dentro de la página es una vista previa local: no sube ni comparte tus imágenes automáticamente.
1. Copia tus imágenes a la carpeta `assets/`, por ejemplo `foto-1.jpg`, `foto-2.jpg`, `foto-3.jpg`.
2. En `index.html`, encuentra el bloque `photo-grid`.
3. Para cada foto, reemplaza el contenido del `label.photo-slot` correspondiente por esta estructura (ajusta el nombre del archivo y el texto alternativo):
   ```html
   <div class="photo-slot">
     <img src="assets/foto-1.jpg" alt="Un recuerdo bonito de nosotros">
   </div>
   ```
   Repite con `foto-2.jpg` y `foto-3.jpg`. Si quieres conservar los marcos, puedes agregar `class="photo-slot photo-fixed"`; el CSS actual ya estiliza `.photo-slot img`.
4. Guarda los cambios y vuelve a publicar.

## Cómo agregar tu nota de voz para que se escuche desde el enlace publicado
1. Graba tu nota de voz en el celular y guárdala como `nota-para-kheri.mp3` o `nota-para-kheri.m4a`.
2. Copia el archivo a `assets/`.
3. En `index.html`, busca el bloque `<audio id="voicePlayer" controls hidden></audio>` y cámbialo por:
   ```html
   <audio controls preload="none" src="assets/nota-para-kheri.mp3"></audio>
   ```
   Cambia el nombre/extensión por el de tu archivo. No subas nada privado que no quieras compartir.

## Probarla en tu computadora
Haz doble clic en `index.html` para abrirla en tu navegador. Prueba botones, mensajes y el minijuego. Las fotos y el audio seleccionados desde los controles son una vista previa local; no se guardan en el sitio publicado.

## Publicarla gratis con GitHub Pages
1. Crea una cuenta gratuita en https://github.com/ si aún no tienes una.
2. Crea un repositorio nuevo, por ejemplo `player2-kheri`. Si quieres mantener el regalo privado mientras trabajas, no compartas el enlace todavía; GitHub Pages normalmente publica el contenido del repositorio como un sitio accesible públicamente.
3. Sube `index.html`, `style.css`, `script.js` y la carpeta `assets/` (si tiene archivos).
4. En el repositorio abre **Settings → Pages**.
5. En **Build and deployment**, selecciona **Deploy from a branch**; elige la rama `main` y la carpeta `/(root)`, y guarda.
6. Espera a que GitHub Pages termine de publicar. La dirección normalmente será `https://TU-USUARIO.github.io/player2-kheri/`. Copia la URL exacta que GitHub muestre en Settings → Pages.
7. Envíale el enlace por WhatsApp con algo como: “Mi niño, te hice un mini lugarcito en internet. Ábrelo cuando tengas un ratito para ti. 💗”

## Nota de privacidad
Un sitio de GitHub Pages es público para cualquiera que tenga o encuentre la URL. No pongas información sensible, direcciones, contraseñas ni fotos íntimas. La página no transmite los archivos elegidos localmente ni guarda datos personales.

# Prep App — instalación en el iPhone (gratis, sin servidor)

La app es una **PWA**: una web que se instala desde Safari y luego funciona como una app normal, **sin conexión** y con **todos los datos guardados solo en tu iPhone**. El único paso "online" es alojar los archivos (gratis) para que Safari pueda instalarla; el hosting no recibe ni guarda ningún dato tuyo.

## Archivos de esta carpeta

| Archivo | Qué es |
|---|---|
| `index.html` | La app completa (todo en un archivo) |
| `sw.js` | Hace que funcione sin conexión |
| `manifest.json` | Nombre e icono de la app |
| `icon-180.png`, `icon-192.png`, `icon-512.png` | Iconos |

Sube **los 6 archivos juntos**, en la misma carpeta.

## Opción A · GitHub Pages (recomendada, 5 minutos)

1. Crea una cuenta gratuita en **github.com** (si no tienes).
2. Arriba a la derecha → **+** → **New repository**. Nombre: `prep-app`. Marca **Public**. → **Create repository**.
3. En la página del repositorio pulsa **uploading an existing file** (o **Add file → Upload files**). Arrastra los 6 archivos → **Commit changes**.
4. Ve a **Settings** (pestaña del repositorio) → menú izquierdo **Pages** → en *Build and deployment* → *Branch*: elige **main** y carpeta **/ (root)** → **Save**.
5. Espera 1-2 minutos y recarga esa misma página: aparecerá tu dirección, algo como
   `https://TU-USUARIO.github.io/prep-app/`

## Opción B · Netlify Drop (aún más rápido, sin cuenta)

1. Entra en **app.netlify.com/drop** desde el ordenador.
2. Arrastra la carpeta con los 6 archivos.
3. Te da una dirección tipo `https://nombre-aleatorio.netlify.app`. (Si creas cuenta gratuita, la dirección queda fija para siempre.)

## Instalarla en el iPhone

1. Abre la dirección en **Safari** (tiene que ser Safari, no Chrome).
2. Pulsa el botón **Compartir** (cuadrado con flecha hacia arriba).
3. **Añadir a pantalla de inicio** → **Añadir**.
4. Cierra Safari y abre la app **Prep** desde el icono de la pantalla de inicio. A partir de aquí funciona sin conexión.

> Importante: usa siempre el icono de la pantalla de inicio. Si la abres en Safari normal, tendrás un segundo almacén de datos distinto.

## Copias de seguridad (muy recomendable)

- **Más → Copia de seguridad y datos → Exportar datos** (o *Con fotos*). Se abre la hoja de compartir: guárdalo en **Archivos → iCloud Drive** o envíatelo por WhatsApp/correo.
- Para restaurar: **Importar copia…** y elige el archivo.
- Si eliminas la app de la pantalla de inicio o borras los datos de Safari en *Ajustes*, se pierde todo lo que no hayas exportado.
- También puedes exportar a **CSV** (se abre en Excel/Numbers): revisiones, entrenos y peso diario.

## Actualizar la app más adelante

Si en el futuro cambias algo del `index.html`, vuelve a subirlo al mismo sitio. La app lo detectará al abrirla con conexión y **conservará tus datos** (están en el iPhone, no en el archivo).

## Qué hay dentro

- **Inicio**: día de preparación, fase actual, peso vs objetivo (100 kg), próximo entreno, macros de hoy, avisos de revisión cada 2 semanas.
- **Entreno**: Rutina 1 y Rutina 2 cargadas con tus ejercicios y técnicas (DS, RP, CL). 5 fases de la guía (15-12-10 · 10-8-6 · Topset/Backoff · 2 Topset/Backoff · Descarga) que generan automáticamente las series. Al registrar, ves la última sesión, la referencia de la preparación anterior y una **sugerencia de progresión** según las reglas del coach (p. ej. "topset al tope del rango → sube 2,5 kg; backoff ≈ 70%"). Temporizador de descanso, RPE, notas, sustituir ejercicios, historial por semanas y gráfica de 1RM estimado por ejercicio. Las rutinas se editan por completo (días, ejercicios, orden, técnicas) y puedes crear nuevas.
- **Dieta**: las dos dietas de tus Excels con todas las alternativas ("avena o crema de arroz…"). Eliges opción y cantidad y se recalculan **kcal y macros** al momento, con modo día de entreno / día de descanso (aplica automáticamente "la mitad los días que no entrenes"). Base de 55 alimentos editable y ampliable. Objetivo de macros calculado (Mifflin-St Jeor) o manual.
- **Progreso**: revisiones cada 2 semanas (peso, 8 medidas, valoración 0-5, feedback en 4 partes), **fotos** desde cámara o galería con comparador lado a lado, gráficas por medida, **peso diario con media de 7 días**, y antropometría **ISAK** con las mismas fórmulas del informe (Σ6, Σ8, % grasa Durnin-Womersley, masa grasa/MLG, perímetros corregidos). El botón *Copiar reporte* genera el texto listo para enviar al coach.
- Las 27 revisiones y el ISAK de la preparación anterior están como **histórico** (solo consulta). La preparación nueva empieza desde el día 0 hoy.
- **Más**: guía completa de fases y técnicas, tips de nutrición y entreno, checklist de descanso, diario, perfil y copias de seguridad.

# Instrucciones generales de programación — Voces que dejan rastro

> **Tipo de documento:** guía general de diseño, estructura e interacción para construir la página web.  
> **Objetivo:** traducir el concepto de “Voces que dejan rastro” a una experiencia web clara, visual, sonora e intuitiva.  
> **Importante:** este documento no define los textos editoriales finales; esos viven en el archivo de contenido. Aquí se define **cómo debe verse, sentirse y comportarse** la página.

---

# 1. IDEA GENERAL DE LA EXPERIENCIA

La página debe sentirse como **entrar y caminar por El Rastro**, no como navegar por una web corporativa.

La experiencia debe mezclar tres sensaciones:

1. **Movimiento y saturación:** al inicio, el sitio debe sentirse vivo, actual, lleno de estímulos, como las zonas más concurridas del Rastro.
2. **Descubrimiento:** conforme el usuario baja, debe sentir que encuentra capas, objetos, voces y rincones.
3. **Viaje hacia atrás en el tiempo:** la experiencia se va volviendo más íntima y menos saturada, hasta llegar a las calles, vendedores y objetos que representan el Rastro más antiguo.

La web debe conservar una estética **moderna y editorial**, pero con detalles visuales inspirados en:
- Carteles hechos a mano.
- Etiquetas de precio.
- Objetos de segunda mano.
- Papeles envejecidos.
- Texturas de mercado.
- Señalética urbana.
- Fotografía documental.

La referencia principal de organización visual debe acercarse más a **Moooi**: imágenes grandes, mucha respiración, tipografía cuidada y elementos interactivos discretos.  
De la referencia de **El Vaquero**, tomar solamente la idea de una página fácil de entender y directa; no copiar su estética plana o excesivamente neutra.

---

# 2. PRINCIPIO VISUAL CENTRAL

## La página debe sentirse como un collage que se mueve

El sitio no debe tener una estructura rígida de “bloque de texto + foto + bloque de texto”.

En su lugar:

- Las fotografías pueden aparecer parcialmente detrás del contenido.
- Algunas imágenes deben desplazarse a distinta velocidad mientras se hace scroll.
- Deben existir pequeños elementos flotantes inspirados en objetos del Rastro.
- Los textos no siempre tienen que quedar centrados.
- Algunas secciones pueden sentirse más ordenadas y otras más acumuladas.
- El diseño debe cambiar ligeramente entre secciones sin perder la misma identidad.

La página debe evitar:
- Tarjetas genéricas tipo app.
- Cuadrículas excesivamente ordenadas.
- Grandes bloques de texto.
- Fondos blancos puros durante toda la experiencia.
- Botones demasiado tecnológicos.
- Efectos futuristas, neón o glassmorphism.

---

# 3. PALETA DE COLOR

La paleta base ya definida para el proyecto es:

- **Rojo:** `#C9312E`
- **Terracota:** `#A1533E`
- **Verde:** `#565B2D`
- **Amarillo:** `#D9A300`
- **Crema:** `#E8D8A8`
- **Naranja:** `#F05A24`

## Color de texto principal sugerido
Añadir un tono oscuro para legibilidad:

- **Carbón / café oscuro:** `#292521`

Este color debe usarse para la mayoría de los textos largos.

## Uso de los colores

### Crema
Debe ser el fondo principal de la web.

No usar blanco puro salvo en detalles muy concretos.

### Rojo
Color principal de identidad.

Usarlo para:
- Palabras destacadas.
- Botones importantes.
- Líneas.
- Indicadores.
- Estados activos.
- Números de secciones.

### Terracota
Usarlo en superficies secundarias y zonas más cálidas o históricas.

### Verde
Usarlo especialmente en secciones relacionadas con:
- Antigüedades.
- Archivo.
- Vendedores antiguos.
- Calles más tranquilas.

### Amarillo y naranja
Usarlos como acentos visuales.

Deben aparecer en:
- Objetos flotantes.
- Etiquetas.
- Microinteracciones.
- Palabras concretas.

No deben dominar grandes fondos durante demasiado tiempo.

---

# 4. TIPOGRAFÍA

La tipografía debe sentirse editorial y un poco especial, pero nunca difícil de leer.

## Combinación sugerida

### Títulos
**Fraunces**

Razones:
- Tiene personalidad.
- Tiene un aire editorial y ligeramente antiguo.
- No se siente como una tipografía “histórica”.
- Funciona bien en tamaños grandes.
- Está disponible de forma sencilla para web.

Usarla para:
- Título principal.
- Títulos de sección.
- Frases destacadas.

### Texto y navegación
**DM Sans**

Razones:
- Muy legible.
- Moderna.
- Neutral sin verse genérica.
- Contrasta bien con Fraunces.

Usarla para:
- Párrafos.
- Menú.
- Botones.
- Pies de foto.
- Etiquetas.

## Alternativa de títulos
Si Fraunces se siente demasiado elegante, usar:

**Cormorant Garamond**

pero con tamaños grandes y poco texto.

## Reglas tipográficas

- No utilizar más de dos familias tipográficas.
- Evitar títulos completamente en mayúsculas salvo etiquetas pequeñas.
- Resaltar palabras mediante color, subrayado o tamaño antes que usando negritas excesivas.
- Mantener los párrafos relativamente cortos.
- Evitar texto blanco sobre fotografía salvo que exista una capa oscura que garantice la lectura.

---

# 5. ESTRUCTURA GENERAL DE LA PÁGINA

La web debe ser principalmente una **página larga de recorrido vertical**.

Orden recomendado:

1. Portada / Hero
2. Introducción
3. Podcast / viaje sonoro
4. Objetos que guardan memoria
5. Recorrer El Rastro — del ahora al antes
6. Historias
7. Galería
8. Reel
9. Archivo / antes y ahora
10. Mi mirada
11. Cierre

El usuario debe poder recorrer toda la historia simplemente bajando.

También debe existir un menú que permita saltar directamente a secciones.

---

# 6. NAVEGACIÓN

## Escritorio

Usar un menú superior muy ligero.

Debe contener:

- Inicio
- Voces
- Objetos
- Historias
- Galería
- Reel
- Archivo
- Mi mirada

El menú puede ser:
- Transparente al inicio.
- Sobre la imagen del hero.
- Convertirse en fondo crema semitransparente cuando el usuario empieza a bajar.

No usar una barra grande y pesada.

## Móvil

Usar:
- Nombre del proyecto a la izquierda.
- Botón “Menú” a la derecha.

Al abrirse:
- Fondo crema.
- Opciones grandes.
- Una debajo de otra.
- Fácil de cerrar.

---

# 7. HERO / PORTADA

La primera pantalla debe ocupar casi toda la altura.

## Fondo

Usar una fotografía de multitud del Rastro.

Recomendadas:
- `foto_34.JPG`
- `foto_22.JPG`

La fotografía debe ocupar toda la pantalla.

## Comportamiento

Al cargar:

1. La fotografía aparece primero.
2. Después aparece el título.
3. Luego el subtítulo.
4. Finalmente aparece el botón.

La entrada debe ser suave.

## Movimiento

Mientras el usuario empieza a bajar:
- La fotografía debe moverse ligeramente más lento que el contenido.
- El título puede subir suavemente.
- Pueden aparecer una o dos pequeñas formas u objetos recortados.

No crear efectos rápidos.

---

# 8. IMÁGENES EN MOVIMIENTO DURANTE EL SCROLL

Este es uno de los recursos visuales más importantes.

Las imágenes deben:

- Aparecer desde distintos lados.
- Tener pequeños desplazamientos verticales.
- Algunas pueden quedar “pegadas” durante unos segundos mientras el texto avanza.
- Otras pueden cruzarse parcialmente.

El movimiento debe sentirse orgánico.

## Regla importante

No todas las fotografías deben moverse.

La mezcla ideal es:

- 60% fotografías estáticas.
- 40% fotografías con movimiento suave.

Si todo se mueve, la página pierde jerarquía.

---

# 9. OBJETOS FLOTANTES

Se pueden crear recortes de objetos fotografiados en El Rastro para usarlos como elementos interactivos.

Ejemplos:

- Cámara analógica.
- Disco de vinilo.
- Libro.
- Muñeca.
- Lámpara.
- Marco.
- Etiqueta de precio.

## Estilo

Los objetos deben:
- Tener fondo transparente.
- Usar colores un poco más vivos que las fotografías.
- Tener una ligera sombra.
- Moverse muy poco incluso cuando no se interactúa con ellos.

## Interacción

Al pasar el cursor:
- El objeto puede girar entre 2 y 5 grados.
- Crecer ligeramente.
- Mostrar una etiqueta pequeña.

Al hacer clic:
- Lleva a una sección relacionada.
- O activa un sonido.

No usar movimientos bruscos.

---

# 10. SECCIÓN PODCAST — VIAJE SONORO

Esta sección es el centro conceptual de la página.

Debe sentirse diferente al resto.

## Fondo

Comenzar más cargado visualmente y progresivamente volverse más limpio.

La misma sección debe representar:

### Inicio
El Rastro actual:
- Turismo.
- Multitud.
- Ropa.
- Puestos actuales.
- Mucho movimiento.

### Medio
Transición:
- Vinilos.
- Libros.
- Objetos usados.
- Conversaciones más cercanas.

### Final
Rastro antiguo:
- Anticuarios.
- Vendedores antiguos.
- Calles pequeñas.
- Personas locales.

## Reproductor

No usar un reproductor genérico.

Crear uno integrado en el diseño.

Elementos:
- Botón grande de play.
- Barra de progreso.
- Tiempo.
- Nombre del podcast.
- Capítulo actual.

## Visualización del sonido

Añadir una representación sencilla del audio:
- Forma de onda.
- Líneas que vibran.
- Pequeñas barras.

Debe moverse solo cuando el audio está reproduciéndose.

## Scroll + audio

La página puede mostrar los diferentes capítulos mientras el podcast sigue sonando.

Importante:
- El audio no debe comenzar automáticamente.
- El usuario tiene que pulsar “Empezar el viaje sonoro”.

---

# 11. OBJETOS QUE GUARDAN MEMORIA

Esta sección debe ser más interactiva.

Usar seis imágenes principales:

- `foto_12.JPG`
- `foto_80.JPG`
- `foto_108.JPG`
- `foto_121.JPG`
- `foto_20.JPG`
- `foto_16.JPG`

## Disposición

Evitar una cuadrícula perfecta.

Usar un collage:

- Una imagen grande.
- Dos medianas.
- Algunas más pequeñas.
- Distintas posiciones.

Cada imagen debe tener una pequeña etiqueta.

Ejemplo:

`CÁMARA ANALÓGICA — escuchar`

## Al pasar el cursor

- La imagen se agranda ligeramente.
- La etiqueta aparece.
- Puede cambiar el cursor a un pequeño icono de sonido.

## Al hacer clic

Se reproduce el foley correspondiente.

Mientras suena:
- Aparece una pequeña animación de ondas.
- Cambia el texto a “Escuchando”.
- El borde o etiqueta usa uno de los colores fuertes de la paleta.

Solo debe sonar un objeto a la vez.

---

# 12. RECORRER EL RASTRO — DEL AHORA AL ANTES

Esta sección debe funcionar como un **viaje visual progresivo**.

No presentarla como tres tarjetas.

Debe sentirse como una sola calle que cambia.

## Primera parte — Ahora

Características:
- Imágenes grandes.
- Más personas.
- Más movimiento.
- Colores más intensos.
- Composición ligeramente saturada.

Imágenes:
- `foto_34.JPG`
- `foto_57.JPG`
- `foto_87.JPG`
- `foto_125.JPG`

## Segunda parte — Mezcla

Características:
- Más espacio entre elementos.
- Imágenes de objetos.
- Menos fotografías de multitud.

Imágenes:
- `foto_16.JPG`
- `foto_122.JPG`
- `foto_69.JPG`
- `foto_121.JPG`

## Tercera parte — Donde todavía queda

Características:
- Ritmo visual más lento.
- Fondos más oscuros o verdes.
- Fotografías más grandes y aisladas.
- Más protagonismo a personas y objetos antiguos.

Imágenes:
- `foto_72.JPG`
- `foto_100.JPG`
- `foto_110.JPG`
- `foto_94.JPG`
- `foto_103.JPG`

## Transición visual

Conforme el usuario avanza:
- Reducir ligeramente la cantidad de elementos.
- Reducir la velocidad de las animaciones.
- Dejar más espacio vacío.
- Cambiar poco a poco de rojo/naranja hacia terracota/verde.

Así, el diseño también debe “viajar en el tiempo”.

---

# 13. HISTORIAS

La sección debe sentirse humana y cercana.

Cada historia puede ocupar una pantalla o media pantalla.

## Diseño recomendado

Una fotografía grande a un lado.

Al otro:
- Nombre o identificación.
- Cita.
- Texto corto.

## Audio

Si existe grabación real:
- Añadir un pequeño botón “Escuchar su voz”.

El botón puede ser únicamente:
- Icono de sonido.
- Duración del clip.

No hacer que los testimonios suenen automáticamente.

---

# 14. GALERÍA

La galería debe sentirse como revisar fotos sobre una mesa.

Evitar una cuadrícula perfecta estilo Instagram.

## Diseño

Usar:
- Diferentes tamaños.
- Espacios irregulares.
- Algunas imágenes un poco inclinadas.
- Pequeñas etiquetas como si fueran notas de archivo.

## Filtros

Los filtros deben ser simples:

- Multitud
- Objetos
- Voces
- Antigüedades
- Oficios
- Ropa
- Barrio
- Detalles

Usar botones pequeños tipo etiqueta.

## Al abrir una fotografía

La fotografía debe aparecer grande sobre un fondo oscuro.

Mostrar:
- Imagen.
- Título.
- Pie.
- Categoría.
- Botón cerrar.

---

# 15. REEL

Debe integrarse como una pausa audiovisual.

## Diseño

El reel debe aparecer grande, preferentemente vertical.

En escritorio:
- Video vertical centrado.
- Texto corto al lado.

En móvil:
- Video ocupa casi todo el ancho.

## Comportamiento

No reproducir automáticamente con sonido.

Puede:
- Mostrar una miniatura.
- Tener un botón central de play.

---

# 16. ARCHIVO — ANTES Y AHORA

Esta sección debe sentirse ligeramente más documental.

## Fondo

Usar:
- Crema.
- Papel.
- Terracota muy claro.

## Comparación

Usar un comparador deslizable:

- Imagen antigua debajo.
- Imagen actual encima.
- Control vertical para desplazar.

Etiquetas:
- Antes.
- Ahora.

## Detalles

Las imágenes históricas pueden tener:
- Bordes irregulares.
- Textura de papel.
- Ligera pérdida de saturación.

Las imágenes actuales deben conservar su fotografía natural.

No aplicar filtros antiguos a las fotografías actuales.

---

# 17. MI MIRADA

Esta sección debe ser más limpia.

Objetivo:
dar un descanso después de muchas imágenes.

## Diseño

Usar:
- Una imagen grande.
- Texto breve.
- Mucho espacio.

Puede incluir:
- Una foto de proceso.
- Una cámara.
- Una fotografía tomada desde la perspectiva de quien documenta.

Evitar convertirla en una biografía tradicional.

---

# 18. CIERRE

El final debe sentirse tranquilo.

Después de una página llena de movimiento, el cierre debe reducir estímulos.

## Fondo

Verde oscuro o carbón.

## Texto

Usar crema.

Frase principal:
**Las voces pasan. El rastro queda.**

## Movimiento

Muy mínimo.

Puede permanecer una pequeña onda de sonido que se apaga lentamente.

Botones:
- Volver al inicio.
- Escuchar otra vez.
- Ver galería.

---

# 19. SISTEMA DE ANIMACIONES

Las animaciones deben ser suaves.

## Duraciones sugeridas

- Aparición de texto: 0.5–0.8 s.
- Aparición de imágenes: 0.7–1 s.
- Hover de botones: 0.2–0.3 s.
- Movimiento de objetos: lento y continuo.

## Tipos de movimiento permitidos

- Fade.
- Desplazamiento vertical pequeño.
- Desplazamiento horizontal pequeño.
- Escala de 1 a máximo 1.05.
- Rotaciones de máximo 5 grados.

## Evitar

- Rebotes.
- Zoom agresivo.
- Elementos girando continuamente.
- Parpadeos.
- Animaciones rápidas.
- Transiciones que bloqueen el scroll.

---

# 20. SONIDO — REGLAS GENERALES

El sonido es parte central del proyecto, pero debe estar bajo control del usuario.

## Regla principal

**Nunca iniciar sonido automáticamente.**

## El usuario puede activar sonido desde:

- Podcast.
- Objetos interactivos.
- Testimonios.
- Reel.

## Control global

Añadir un pequeño botón persistente:

- Sonido activado.
- Sonido silenciado.

Debe ser discreto.

## Mezcla

Cuando comienza el podcast:
- Detener cualquier foley activo.

Cuando se activa un foley:
- Pausar o bajar mucho el podcast.

Nunca reproducir dos sonidos principales simultáneamente.

---

# 21. BOTONES

Inspirarse en la discreción de Moooi, pero adaptar los colores al proyecto.

## Botón principal

- Fondo rojo.
- Texto crema.
- Forma redondeada.
- Sin sombra fuerte.

## Botón secundario

- Fondo transparente.
- Borde café oscuro o rojo.
- Texto oscuro.

## Hover

- Pequeño cambio de fondo.
- Ligera ampliación.
- Nada exagerado.

---

# 22. FORMAS Y BORDES

No todo debe ser redondeado.

Usar mezcla de:

- Fotos rectangulares.
- Etiquetas ligeramente irregulares.
- Botones redondeados.
- Elementos tipo papel con esquinas rectas.

Esto ayuda a evitar que la web parezca una aplicación.

---

# 23. TEXTURAS

Usar texturas de forma muy suave.

Posibles recursos:

- Papel.
- Grano fotográfico.
- Cartón.
- Pegatinas.
- Etiquetas.
- Bordes gastados.

La textura nunca debe dificultar la lectura.

Debe estar en un nivel muy bajo de intensidad.

---

# 24. EXPERIENCIA EN MÓVIL

La versión móvil no debe intentar copiar exactamente el escritorio.

## Cambios

- Reducir objetos flotantes.
- Eliminar algunas animaciones de fondo.
- Fotografías en una sola columna.
- Menú simplificado.
- Podcast siempre visible y fácil de controlar.
- Collages convertidos en secuencias verticales.

## Sonido

Los botones de audio deben ser grandes y fáciles de tocar.

## Texto

Evitar más de 5–6 líneas seguidas sin un elemento visual entre ellas.

---

# 25. ACCESIBILIDAD

La experiencia debe seguir siendo usable aunque alguien no pueda escuchar los sonidos.

Por eso:

- Todos los audios deben tener texto descriptivo.
- El podcast debe tener transcripción o resumen.
- Los testimonios deben mostrar la cita escrita.
- Los botones de sonido deben indicar claramente si están reproduciendo.

También:

- Mantener buen contraste de texto.
- No depender solo del color para indicar acciones.
- Las fotografías deben incluir texto alternativo.
- Respetar la preferencia del usuario de reducir movimiento.

Si el navegador indica “reducir movimiento”:
- Desactivar parallax.
- Desactivar movimientos continuos.
- Mantener únicamente fades básicos.

---

# 26. CARGA Y RENDIMIENTO

Hay muchas fotografías.

Para evitar que la web sea lenta:

- Cargar primero solo las imágenes visibles.
- Cargar las siguientes conforme el usuario baja.
- Comprimir imágenes sin perder calidad visual.
- Usar versiones más pequeñas en móvil.

Los audios tampoco deben cargarse todos desde el inicio.

---

# 27. IDENTIDAD DE CADA SECCIÓN

La página debe mantener una misma identidad, pero cada sección puede tener un matiz distinto.

| Sección | Sensación | Color dominante |
|---|---|---|
| Hero | multitud / energía | rojo + crema |
| Introducción | observación | crema |
| Podcast | viaje / transformación | rojo → verde |
| Objetos | descubrimiento | amarillo + terracota |
| Recorrido | cambio temporal | naranja → verde |
| Historias | humano | crema + terracota |
| Galería | acumulación | crema + rojo |
| Reel | movimiento | carbón |
| Archivo | memoria | crema + verde |
| Mi mirada | pausa | crema |
| Cierre | permanencia | verde oscuro / carbón |

---

# 28. ELEMENTOS QUE NO DEBEN APARECER

Evitar:

- Carruseles automáticos.
- Popups.
- Formularios innecesarios.
- Chat flotante.
- Cookies visualmente invasivas.
- Animaciones 3D complejas.
- Fondos con gradientes digitales modernos.
- Tarjetas tipo dashboard.
- Iconografía genérica en exceso.
- Colores fuera de la paleta sin una razón clara.

---

# 29. PRIORIDADES DE IMPLEMENTACIÓN

Si la página se construye por etapas, el orden debe ser:

### Prioridad 1
- Estructura.
- Tipografía.
- Paleta.
- Hero.
- Navegación.
- Fotografías.

### Prioridad 2
- Podcast.
- Sonido.
- Objetos interactivos.

### Prioridad 3
- Animaciones de scroll.
- Collages.
- Comparador antes/ahora.

### Prioridad 4
- Microinteracciones.
- Texturas.
- Detalles de movimiento.

La experiencia debe funcionar correctamente antes de añadir efectos decorativos.

---

# 30. RESUMEN PARA LA IA QUE CONSTRUYA LA WEB

Construir una página editorial de una sola pieza larga llamada **“Voces que dejan rastro”**.

Debe parecer un recorrido documental y sonoro por El Rastro de Madrid.

La experiencia empieza saturada, contemporánea y llena de personas, y progresivamente se vuelve más calmada, antigua e íntima.

La fotografía es protagonista.

El sonido es una capa narrativa central.

La interfaz debe ser mínima.

Usar:

- Fondo crema.
- Rojo, terracota, verde, amarillo y naranja como acentos.
- Fraunces para titulares.
- DM Sans para lectura e interfaz.
- Fotografías grandes.
- Collages asimétricos.
- Objetos flotantes.
- Scroll suave.
- Parallax moderado.
- Sonidos activados exclusivamente por el usuario.

Inspiración visual:
- La elegancia editorial, el espacio y el protagonismo fotográfico de Moooi.
- La claridad de navegación y lectura de una página sencilla.
- La materialidad real de El Rastro: papel, carteles, objetos, puestos y acumulación.

El resultado no debe parecer una web turística ni una tienda online.

Debe sentirse como **caminar, mirar y escuchar El Rastro mientras diferentes épocas aparecen dentro del mismo recorrido**.

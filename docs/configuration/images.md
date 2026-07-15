# Imágenes y miniaturas

KCFinder puede usar GD, Imagick o GraphicsMagick para miniaturas, redimensionado y edición de imágenes.

## Extensiones recomendadas

- GD para una instalación PHP sencilla.
- Imagick como opción adicional cuando el servidor lo permita.
- EXIF para corregir orientación automáticamente.
- Fileinfo para validar el contenido real antes de procesarlo.

## Límites

Define tamaños máximos de subida, dimensiones y `_maxImagePixels` según la memoria disponible. Una imagen comprimida pequeña puede expandirse a cientos de megapíxeles durante su decodificación.

::: tip Verificación
Después de cambiar el controlador de imágenes, prueba subida, orientación EXIF, miniatura, redimensionado y eliminación de caché con archivos representativos.
:::

# Grindset - Pendientes

## Estado actual (30 marzo 2026)
Todo pusheado a master, Vercel deployea automatico.

## Hecho hoy
- Error handling + loading states + validacion en toda la app
- Admin mode (password: Padel-123, candado bottom-right)
- Topic states: locked/available/in_progress/completed con auto-desbloqueo
- Temario Mates PAU Catalunya: 8 temas, 7 bloques en Matrices con ~57 ejercicios
- KaTeX para renderizar formulas (matrices con parentesis, fracciones, etc.)
- Calendario semanal (lunes primero en toda la app)
- Tareas se auto-completan al hacer los ejercicios
- Click en tarea del dia lleva al bloque especifico
- Progresion por bloques: acabas el bloque 1 se desbloquea el 2
- Tracking de "adelantado" con badge dorado cuando vas por delante del planning
- WhatsApp notificaciones via CallMeBot (probado y funcionando)
- SSH key para joelromangit configurada
- Git author corregido a joelromancb@gmail.com

## Pendiente

### Prioridad alta
- [ ] Expandir ejercicios de bloques 4-7 de Matrices (Multiplicacion, Determinantes, Adjunta, Inversa) a 10-15 por bloque igual que los primeros 3
- [ ] Escribir temario completo para los otros 7 temas de mates (Sistemas, Probabilidad, Estadistica, Funciones, Derivadas, Optimizacion, Integrales) con teoria LaTeX + ejercicios
- [ ] Cada tema necesita planning semanal propio (7 dias, 1 bloque por dia)
- [ ] Biologia - usuario no dio temas todavia

### Prioridad media
- [ ] Migrar estudio a Supabase: crear tablas theory_blocks y exercises, migrar datos
- [ ] Panel admin para ver ejercicios enviados a corregir (actualmente solo llega WhatsApp)
- [ ] Feedback del admin en ejercicios manuales (aprobar/rechazar con comentario)
- [ ] Ejercicios de tipo fill_blank: mejorar correccion (aceptar variantes, tolerancia a espacios)

### Prioridad baja
- [ ] Code splitting (KaTeX pesa, lazy load)
- [ ] PWA (offline, push notifications nativas en vez de WhatsApp)
- [ ] Exportar progreso a PDF
- [ ] Estadisticas del alumno: tiempo por tema, precision en auto-exercises, racha

## Config

### CallMeBot WhatsApp
- Phone: 34671921121
- API key: 4084122
- Env vars en Vercel: VITE_CALLMEBOT_PHONE, VITE_CALLMEBOT_APIKEY
- Test: `curl "https://api.callmebot.com/whatsapp.php?phone=34671921121&text=Test&apikey=4084122"`

### SSH
- joelromangit: ~/.ssh/id_ed25519_romangit
- joelromantrebol: ~/.ssh/id_ed25519
- Config en ~/.ssh/config con Host github-romangit

### Git (este repo)
- user.email: joelromancb@gmail.com
- user.name: joelromangit
- Remote: git@github-romangit:joelromangit/grindset.git

# 🤖 Configuración de n8n para Chat con IA - Big Pollo

## 📋 Descripción
Este documento explica cómo configurar el workflow de n8n para el chat con IA de Big Pollo.

## 🔧 Configuración del Webhook

### 1. Crear Webhook en n8n
1. Crear un nuevo workflow en n8n
2. Agregar nodo **Webhook**
3. Configurar el webhook:
   - **HTTP Method**: POST
   - **Path**: `/webhook/bigpollo-chat`
   - **Authentication**: None (o configurar según necesidades)

### 2. Estructura de datos recibidos
El frontend enviará esta estructura JSON:

```json
{
  "message": "Hola, quiero hacer un pedido",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "sessionId": "bigpollo_1234567890_abc123",
  "context": {
    "company": "Big Pollo",
    "location": "Villavicencio, Meta, Colombia",
    "products": ["Pollitos de Un Día", "Pollo Fresco", "Huevos AA"],
    "phone": "+573505890050"
  }
}
```

### 3. Workflow sugerido

```
📥 Webhook
    ↓
🤖 OpenAI/Claude/ChatGPT Node
    ↓
📤 Respond to Webhook
```

## 🤖 Configuración del nodo de IA

### Prompt sugerido para la IA:
```
Eres el asistente virtual de Big Pollo, una granja familiar ubicada en la Vereda La Llanerita, Villavicencio, Meta, Colombia.

INFORMACIÓN DE LA EMPRESA:
- Nombre: Big Pollo
- Ubicación: Vereda La Llanerita, Villavicencio, Meta, Colombia
- Teléfono/WhatsApp: +57 350 589 0050
- Horarios: Lunes a domingo de 7:00 AM a 7:00 PM
- Entrega: hasta 8:00 PM

PRODUCTOS:
1. Pollitos de Un Día: $3,500 retail / $3,000 mayorista por pollito
2. Pollo Fresco: $18,000 retail / $15,000 mayorista por kg
3. Huevos AA: $8,500 retail / $7,200 mayorista por docena

SERVICIOS:
- Delivery gratuito para pedidos mayores a $50,000
- Costo de delivery: $8,000 para pedidos menores
- Área de cobertura: Villavicencio y municipios cercanos
- Métodos de pago: Efectivo, transferencias, Nequi, Daviplata, tarjetas

INSTRUCCIONES:
- Sé amigable, profesional y conocedor
- Usa emojis ocasionalmente (🐓🥚)
- Mantén un tono cálido y familiar típico llanero
- Si no sabes algo, deriva al WhatsApp: +57 350 589 0050
- Promociona los productos frescos y la calidad llanera
- Responde en español colombiano

Pregunta del usuario: {message}
```

### 4. Nodo de respuesta
El último nodo debe retornar:
```json
{
  "response": "Respuesta de la IA aquí"
}
```

## 🌐 Variables de entorno

Crear archivo `.env` en el proyecto React con:
```env
REACT_APP_N8N_WEBHOOK_URL=https://tu-instancia-n8n.com/webhook/bigpollo-chat
```

## 🔒 Seguridad (Opcional)

Para mayor seguridad, puedes agregar:
1. **API Key authentication** en el webhook
2. **Rate limiting** para prevenir spam
3. **Validación de datos** en n8n
4. **Logging** de conversaciones

## 📝 Ejemplo de workflow completo

1. **Webhook** (recibe datos del frontend)
2. **Set Node** (procesar/limpiar datos si es necesario)
3. **OpenAI/ChatGPT Node** (generar respuesta)
4. **Function Node** (formatear respuesta si es necesario)
5. **Respond to Webhook** (enviar respuesta al frontend)

## 🧪 Testing

Para probar el webhook:
```bash
curl -X POST https://tu-instancia-n8n.com/webhook/bigpollo-chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Hola, quiero información sobre sus productos",
    "sessionId": "test_session",
    "timestamp": "2024-01-01T12:00:00.000Z"
  }'
```

## 📊 Mejoras futuras

- **Análisis de sentimientos** de los mensajes
- **Integración con CRM** para guardar leads
- **Métricas de conversación** (duración, satisfacción)
- **Respuestas automáticas** para horarios no laborales
- **Escalación automática** a WhatsApp para casos complejos
# Proveedores RPC de nodos

Los proveedores RPC (Remote Procedure Call) permiten interactuar con redes blockchain sin ejecutar y mantener tu propio nodo. A continuación un resumen breve de proveedores populares y recomendaciones para escoger.

## Proveedores populares

- **Alchemy**  
    Alto rendimiento, APIs mejoradas (debugging, NFT, enhanced APIs), soporte WebSocket y panel de control. Buena opción para producción y escalado.

- **Infura**  
    Servicio maduro con soporte para Ethereum y IPFS, documentación extensa y estabilidad. Amplio uso en aplicaciones que requieren fiabilidad a gran escala.

- **Moralis**  
    Enfoque BaaS (backend-as-a-service) con SDKs, eventos en tiempo real y facilidad para prototipos y aplicaciones front-end rápidas.

## Cómo elegir

- Latencia y ubicación geográfica del endpoint.  
- Límite de peticiones y precios (free tier vs planes pagados).  
- Soporte de websockets si necesitas suscripciones/escucha de eventos.  
- APIs y SDKs disponibles (p. ej. integraciones con ethers.js, web3.js).  
- SLA, historial de disponibilidad y facilidad de uso.

## Autenticación y seguridad

- La mayoría requiere una API key o URL de endpoint.  
- Nunca incluyas claves en el repositorio; usa variables de entorno o un secreto gestionado.

---

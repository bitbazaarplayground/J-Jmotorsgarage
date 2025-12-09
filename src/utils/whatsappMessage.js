export function whatsappMessage(service = "") {
  const base = "https://wa.me/34711207067?text=";

  const template = `
  Datos de mi vehículo:  
  • Marca:  
  • Modelo:  
  • Año:  
  • Motor (opcional):  
  
  Descripción del problema o consulta:
  `;

  return base + encodeURIComponent(template);
}

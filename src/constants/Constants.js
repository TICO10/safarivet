import cirugia from '../assets/servicios/CIRUJIAS.jpg';
import consulta from '../assets/servicios/CONSULTAGENERAL.jpg';
import consulta1 from '../assets/servicios/CONSULTANOCONVENCIONALES.jpg';
import consulta2 from '../assets/servicios/CONSULTASESPECIALIZADAS.jpg';
import hospitalizacion from '../assets/servicios/HOSPITALIZACION.jpg';
import ortopedia from '../assets/servicios/ORTOPEDIA.jpg';
import profilaxis from '../assets/servicios/PROFILAXIS.jpg';
import radiografia from '../assets/servicios/RADIOGRAFIA.jpg';
import urgencias from '../assets/servicios/URGENCIAS.jpg';
import vacunacion from '../assets/servicios/VACUNACION.jpg';

export const servicios = [
  { 
    img: urgencias, 
    titulo: '💊 Todos los servicios', 
    value: 'todos', 
    visual: 1, 
    text: '' 
  },
  { 
    img: urgencias, 
    titulo: '🚨 Atención de urgencias', 
    value: 'urgencias', 
    visual: 1, 
    text: 'En caso de accidentes, enfermedades repentinas, envenenamientos, convulsiones u otros signos de alarma, contamos con servicio de urgencias veterinarias, listo para atender a tu mascota cuando más lo necesita.<br/><br/>\
    En safarivet estamos comprometidos con la salud de tu mascota. 🐕🐱' 
  },
  { 
    img: cirugia, 
    titulo: '🔪 Cirugías Veterinarias', 
    value: 'cirugia', 
    visual: 1, 
    text: 'contamos con un quirófano completamente equipado para realizar procedimientos quirúrgicos de alta calidad, garantizando la máxima seguridad y el bienestar de tu mascota en todo momento. Nuestro equipo de veterinarios cirujanos está altamente capacitado para manejar una amplia gama de intervenciones.<br/><br/>\
    ¿Qué ofrecemos?<br/><br/>\
    ✅ Cirugías de tejidos blandos: Realizamos procedimientos como esterilización, cirugía abdominal, extracción de masas o cuerpos extraños, entre otros.<br/>\
    ✅ Cirugías ortopédicas: Nos especializamos en la reparación de fracturas, luxaciones y otros problemas musculoesqueléticos.<br/>\
    ✅ Anestesia segura y monitoreo constante: Utilizamos protocolos de anestesia modernos y vigilamos de cerca los signos vitales de tu mascota durante toda la cirugía.<br/>\
    ✅ Atención pre y postoperatoria: Ofrecemos una evaluación completa antes de la cirugía y un seguimiento detallado para asegurar una recuperación exitosa y sin complicaciones.' 
  },
  { 
    img: consulta, 
    titulo: '🩺 Consulta médica', 
    value: 'consulta', 
    visual: 1, 
    text: 'Realizamos evaluaciones completas para mantener la salud de tu mascota al día, incluyendo:<br/><br/>\
    ¿Qué ofrecemos?<br/><br/>\
    ✅ Revisión física general<br/>\
    ✅ Control de peso y estado nutricional<br/>\
    ✅ Actualización de vacunas y desparasitación<br/>\
    ✅ Diagnóstico y tratamiento de enfermedades<br/>\
    ✅ Asesoría en cuidados, alimentación y comportamiento<br/>\
    ✅ Atención animales no convencionales (aves, reptiles, roedores, etc.)'
  },
  { 
    img: radiografia, 
    titulo: '📸 Ecografía y Radiografía', 
    value: 'radiografia', 
    visual: 1, 
    text: 'Ecografía<br/><br/>\
    La ecografía, o ultrasonido, es una técnica de imagen no invasiva y en tiempo real que nos proporciona una visión detallada de los órganos internos de tu mascota.<br/><br/>\
    ¿Qué nos permite evaluar?<br/><br/>\
    ✅ Embarazo: Confirmamos el embarazo y monitoreamos el desarrollo de los cachorros o gatitos.<br/>\
    ✅ Problemas abdominales: Evaluamos órganos como el hígado, páncreas, riñones, bazo y vejiga para detectar masas, quistes o inflamación.<br/>\
    ✅ Evaluación cardíaca: Nos ayuda a examinar el corazón y sus válvulas para diagnosticar enfermedades cardíacas.<br/>\
    ✅ Detección de fluidos: Identificamos la acumulación de fluidos anormales en el abdomen o el tórax.<br/><br/>\
    Radiografía<br/><br/>\
    Es un procedimiento seguro, rápido e indoloro que ofrece    una visión detallada de los huesos, órganos y tejidos blandos de tu mascota.<br/><br/>\
    ¿Qué nos permite diagnosticar?<br/><br/>\
    ✅ Fracturas y problemas óseos: Identificamos con precisión fracturas, dislocaciones, artritis y otras anomalías esqueléticas.<br/>\
    ✅ Objetos extraños: Localizamos objetos que tu mascota pudo haber ingerido, como juguetes, huesos o piedras.<br/>\
    ✅ Problemas de órganos internos: Ayuda a evaluar el tamaño, la forma y la posición de órganos como el corazón, los pulmones, el hígado y los riñones.<br/>\
    ✅ Cálculos en vejiga o riñones: Detectamos la presencia de cálculos que podrían estar causando molestias o problemas de salud.'
  },
  { 
    img: hospitalizacion, 
    titulo: '🏥 Hospitalización', 
    value: 'hospitalizacion', 
    visual: 1, 
    text: 'Informamos a todos nuestros clientes de Safarivet que contamos con servicio de hospitalización veterinaria, diseñado para brindar atención continua y especializada a mascotas que requieren cuidados médicos prolongados o monitoreo constante.<br/><br/>\
    ¿Qué ofrecemos?<br/><br/>\
    ✅ Monitoreo médico 24/7<br/>\
    ✅ Administración de medicamentos y fluidoterapia<br/>\
    ✅ Espacios cómodos, limpios y seguros<br/>\
    ✅ Atención personalizada por personal veterinario calificado<br/>\
    ✅ Reportes periódicos del estado de salud de tu mascota<br/><br/>\
    Tu mascota estará en buenas manos, recibiendo la atención y el cuidado que necesita para su pronta recuperación.' 
  },
  { 
    img: ortopedia, 
    titulo: '🦴 Ortopedia', 
    value: 'ortopedia', 
    visual: 1, 
    text: 'Nos complace informar que ahora contamos con consultas especializadas y procedimientos ortopédicos veterinarios, enfocados en el diagnóstico, tratamiento y recuperación de problemas en huesos, articulaciones, músculos y ligamentos de tu mascota.<br/><br/>\
    ¿Qué incluye nuestra atención ortopédica?<br/><br/>\
    ✅ Evaluación clínica especializada<br/>\
    ✅ Diagnóstico de cojeras, fracturas, displasias y otros trastornos locomotores<br/>\
    ✅ Radiografías y estudios complementarios<br/>\
    ✅ Tratamientos médicos y quirúrgicos<br/>\
    ✅ Cirugías ortopédicas (fracturas, luxaciones, displasia de cadera, entre otros)<br/>\
    ✅ Rehabilitación y seguimiento postoperatorio<br/><br/>\
    Te recordamos que la consulta de ortopedia debe agendarse previamente!!' 
  },
  { 
    img: profilaxis, 
    titulo: '🦷 Profilaxis Dental', 
    value: 'profilaxis', 
    visual: 1, 
    text: 'La profilaxis dental es un procedimiento esencial que previene y trata las enfermedades de las encías, manteniendo la boca de tu mejor amigo sana y libre de dolor.<br/><br/>\
    ¿Qué ofrecemos?<br/><br/>\
    ✅ Evaluación integral: Revisamos la cavidad bucal de tu mascota para detectar problemas como acumulación de sarro, gingivitis o piezas dentales dañadas.<br/>\
    ✅ Limpieza profunda: Realizamos una limpieza completa de los dientes, tanto por encima como por debajo de la línea de la encía, eliminando la placa y el sarro acumulado.<br/>\
    ✅ Pulido dental: Pulimos cada diente para suavizar la superficie, lo que ayuda a prevenir la futura adhesión de placa bacteriana.<br/>\
    ✅ Educación en casa: Te brindamos consejos y productos para que puedas mantener una buena higiene bucal de tu mascota en casa.<br/><br/>\
    La profilaxis no solo mejora el aliento de tu mascota, sino que también previene problemas de salud más graves. ¡Un chequeo a tiempo puede hacer la diferencia!' 
  },
  { 
    img: vacunacion, 
    titulo: '💉 Vacunación', 
    value: 'vacunacion', 
    visual: 1, 
    text: 'En Safarivet, la vacunación es un pilar fundamental para la salud y el bienestar de tu mascota. A través de un calendario de inmunización adecuado, protegemos a tu mejor amigo contra enfermedades infecciosas y potencialmente mortales.<br/><br/>\
    ¿Qué ofrecemos?<br/><br/>\
    ✅ Plan de vacunación personalizado: Diseñamos un plan de acuerdo a la edad, estilo de vida y riesgos de exposición de tu mascota.<br/>\
    ✅ Vacunas de alta calidad: Utilizamos productos de los laboratorios más confiables para garantizar una protección efectiva y segura.<br/>\
    ✅ Orientación completa: Te explicamos la importancia de cada vacuna, los posibles efectos secundarios y el calendario de revacunación.<br/>\
    ✅ Recordatorio de citas: Te ayudamos a llevar un control de las fechas para que tu mascota siempre esté protegida.<br/><br/>\
    Proteger a tu mascota es nuestro compromiso. Una vacuna a tiempo puede salvarle la vida.' 
  },
];

export const WHATSAPP_NUMBER = 'https://wa.me/573144671515';
export const PHONE = '+57 314 467 1515';
export const EMAIL = 'safarivetbogota@gmail.com';
export const ADDRESS = 'TV 18 Bis #13 Sur 40, Bogotá';
export const INSTAGRAM = '@safarivetbogota';
export const MAIL_URL = 'mailto:safarivetbogota@gmail.com';
export const INSTAGRAM_URL = 'https://instagram.com/safarivetbogota';

export const emailjsConfig = {
  serviceId: 'service_5s875mn',
  templateId: 'template_6z5eybc', // Reemplaza por tu Template ID
  userId: 'z4mC459UUeD_0RbfT',
}
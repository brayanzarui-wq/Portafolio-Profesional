import { Project, Experience, Skill, Education } from './types';

export const PROFILE = {
  name: "Brayan Dev",
  title: "Full Stack Engineer Student & UI enthusiast",
  bio: "Estudiante de Ingeniería en Sistemas Computacionales en 9° semestre, con experiencia práctica en desarrollo de aplicaciones empresariales.",
  cvSummary: "Ingeniero en Sistemas Computacionales en formación (9° semestre) con una sólida base en el ecosistema JavaScript y desarrollo Full Stack. Apasionado por crear arquitecturas escalables y experiencias de usuario intuitivas. Combino la creatividad del diseño UI con la lógica estructurada de la ingeniería de software. Con experiencia práctica en entornos empresariales (Iteradapta) y gestión de proyectos independientes, busco aportar innovación, calidad de código y soluciones eficientes a equipos de alto rendimiento.",
  email: "brayanzarui@gmail.com",
  phone: "351-306-6139",
  github: "https://github.com/brayanzarui-wq",
  linkedin: "https://www.linkedin.com/in/brayan-vargas-44653b398/",
  location: "Zamora, México",
  // Updated path: removed leading slash for better relative path resolution
  avatarUrl: "assets/me.png" 
};

export const SKILLS: Skill[] = [
  { name: "React / Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Supabase", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "SQL Server", category: "backend" },
  { name: "Figma", category: "design" },
  { name: "Git", category: "tools" },
  { name: "Gemini AI", category: "tools" },
];

export const EXPERIENCE: Experience[] = [
  {
  id: "1",
  role: "Desarrollador de Aplicaciones",
  company: "Iteradapta",
  period: "2025 - Presente",
  description: "Desarrollo de aplicaciones empresariales utilizando JavaScript y SQL server. Contribución en soluciones que optimizan procesos internos y mejoran la experiencia del usuario.",
  achievements: [
      "Optimización de consultas SQL reduciendo el tiempo de carga de reportes en un 40%.",
      "Implementación de módulos reutilizables para estandarizar la UI de la empresa.",
      "Colaboración directa con stakeholders para definir requerimientos de software."
  ],
  technologies: ["JavaScript", "React", "SQL Server", "Bootstrap"]
  },
  {
    id: "2",
    role: "Desarrollador Frontend",
    company: "Proyectos Independientes",
    period: "2025",
    description: "Desarrollo de sistema POS para e-commerce con integración de AWS S3 para gestión de imágenes. Creación de plataforma web de teclados mecánicos desplegada en Vercel.",
    achievements: [
        "Despliegue exitoso de aplicaciones en Vercel con CI/CD.",
        "Integración de almacenamiento en la nube (AWS S3) para manejo eficiente de assets.",
        "Diseño de interfaces responsivas mobile-first asegurando 100% de accesibilidad."
    ],
    technologies: ["Next.js", "Node.js", "AWS S3", "PostgreSQL", "Tailwind CSS"]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "e1",
    degree: "Ingeniería en Sistemas Computacionales",
    institution: "Instituto Técnologico de Estudios Superiores de Zamora",
    period: "2021 - Presente (9° Semestre)",
    description: "Especialización en FullStack."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "E-commerce Teclados Mecánicos",
    description: "Plataforma web de venta de teclados premium. Incluye catálogo dinámico, filtros avanzados, carrito de compras persistente y diseño totalmente responsive.",
    tags: ["Next.js", "React", "Tailwind", "Vercel"],
    // Updated with provided S3 link (HTTPS format)
    imageUrl: "https://cataleya-pos-images.s3.amazonaws.com/Captura%20de%20pantalla%202025-11-18%20191611.png", 
    gallery: [
      "https://cataleya-pos-images.s3.amazonaws.com/Captura%20de%20pantalla%202025-11-18%20191611.png",
      "https://cataleya-pos-images.s3.amazonaws.com/Captura%20de%20pantalla%202025-11-18%20191644.png",
      "https://cataleya-pos-images.s3.amazonaws.com/Captura%20de%20pantalla%202025-11-18%20191720.png",
      "https://cataleya-pos-images.s3.amazonaws.com/Captura%20de%20pantalla%202025-11-18%20191735.png"
    ],
    workflow: [
      { 
        title: "Diseño UI/UX", 
        description: "Prototipado de alta fidelidad en Figma enfocado en una estética 'gamer' minimalista. Se diseñaron componentes reutilizables y un sistema de diseño coherente con paleta de colores oscura y acentos vibrantes." 
      },
      { 
        title: "Desarrollo Frontend", 
        description: "Implementación con Next.js App Router para optimización SEO y renderizado rápido. Uso de Server Components para mejorar la performance inicial y Client Components para interactividad." 
      },
      { 
        title: "Gestión de Estado", 
        description: "Implementación de Context API para el manejo global del carrito de compras, sincronizado con LocalStorage para persistencia entre sesiones. Hook personalizado para evitar problemas de hidratación en SSR." 
      },
      { 
        title: "Despliegue", 
        description: "Configuración de CI/CD en Vercel para actualizaciones automáticas. Deploy automático desde la rama main con preview deployments para cada pull request." 
      }
    ],
    link: "https://keyboard-page.vercel.app/",
    github: "https://github.com/brayanzarui-wq/Keyboard-Page",
    isPrivate: true,
    readmeContent: `
# E-commerce Teclados Mecánicos ⌨️

> **Acceso Restringido:** Este repositorio se mantiene privado para proteger la propiedad intelectual del diseño de interfaz y la lógica de negocio específica implementada.

## 🎯 Descripción del Proyecto

Plataforma e-commerce especializada en la venta de teclados mecánicos premium. El proyecto fue desarrollado como parte de mi portafolio profesional, demostrando capacidades en desarrollo frontend moderno, gestión de estado y optimización de performance.

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** JavaScript/JSX
- **Estilos:** Tailwind CSS
- **Estado:** React Context API + Custom Hooks
- **Almacenamiento:** LocalStorage API
- **Despliegue:** Vercel Edge Network
- **Control de versiones:** Git & GitHub

## ✨ Características Principales

### 1. Catálogo Dinámico
- Renderizado del lado del servidor (SSR) para mejor SEO y carga inicial rápida
- Grid responsive que se adapta a diferentes tamaños de pantalla
- Lazy loading de imágenes para optimizar el rendimiento

### 2. Sistema de Filtrado Avanzado
- Filtros por categoría (60%, TKL, Full Size, etc.)
- Rango de precios personalizable
- Filtro por tipo de switch (Cherry MX, Gateron, etc.)
- Actualizaciones en tiempo real sin recargar la página

### 3. Carrito de Compras Inteligente
- Persistencia de datos entre sesiones usando LocalStorage
- Actualización dinámica de cantidades
- Cálculo automático de totales
- Validación de stock disponible

### 4. Diseño Responsive
- Mobile-first approach
- Breakpoints optimizados para móviles (320px), tablets (768px) y desktop (1024px+)
- Navegación adaptativa con menú hamburguesa en dispositivos móviles

## 📦 Estructura del Proyecto

\`\`\`bash
keyboard-page/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.js          # Layout principal
│   │   ├── page.js            # Página de inicio
│   │   ├── productos/         # Catálogo de productos
│   │   └── carrito/           # Página del carrito
│   ├── components/            # Componentes reutilizables
│   │   ├── ProductCard.jsx   # Tarjeta de producto
│   │   ├── FilterBar.jsx     # Barra de filtros
│   │   ├── CartItem.jsx      # Item del carrito
│   │   └── Navbar.jsx        # Navegación principal
│   ├── context/              # Contextos de React
│   │   └── CartContext.js    # Estado global del carrito
│   ├── hooks/                # Custom hooks
│   │   ├── useLocalStorage.js
│   │   └── useCart.js
│   ├── lib/                  # Utilidades
│   │   ├── constants.js      # Constantes de la app
│   │   └── helpers.js        # Funciones auxiliares
│   └── data/                 # Datos mock
│       └── products.js       # Catálogo de productos
├── public/                   # Assets estáticos
│   ├── images/
│   └── icons/
├── tailwind.config.js        # Configuración de Tailwind
├── next.config.js           # Configuración de Next.js
└── package.json
\`\`\`

## 🔧 Desafío Técnico Destacado: Persistencia sin Hydration Errors

### Problema
Al usar LocalStorage con Server-Side Rendering (SSR) en Next.js, se generaban errores de "Hydration Mismatch" porque el servidor no tiene acceso a \`window.localStorage\`, pero el cliente sí.

### Solución Implementada
Creé un custom hook que sincroniza el estado solo después del montaje en el cliente:

\`\`\`javascript
import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Inicializar con el valor por defecto
  const [storedValue, setStoredValue] = useState(initialValue);
  
  // Flag para saber si estamos en el cliente
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.error('Error al leer del localStorage:', error);
    }
  }, [key]);

  const setValue = (value) => {
    try {
      setStoredValue(value);
      if (isClient) {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error('Error al guardar en localStorage:', error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
\`\`\`

**Beneficios:**
- Elimina errores de hidratación
- Sincronización confiable entre cliente y servidor
- Manejo de errores robusto
- Reutilizable en toda la aplicación

## 🎨 Sistema de Diseño

### Paleta de Colores
- **Primary:** Cyan (#00FFFF) - Acentos y CTAs
- **Background:** Dark Gray (#1a1a1a) - Fondo principal
- **Surface:** Darker Gray (#0a0a0a) - Tarjetas y contenedores
- **Text:** White/Gray scale - Jerarquía tipográfica

### Tipografía
- **Headers:** Inter Bold
- **Body:** Inter Regular
- **Monospace:** JetBrains Mono (para specs técnicas)

## 🚀 Instalación y Uso

\`\`\`bash
# Clonar el repositorio (requiere acceso)
git clone https://github.com/brayanzarui-wq/Keyboard-Page.git

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm start
\`\`\`

## 📊 Métricas de Performance

- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.0s
- **Lighthouse Score:** 95+
- **Bundle Size:** ~150KB (gzipped)

## 🔜 Próximas Mejoras

- [ ] Integración de pasarela de pago (Stripe/PayPal)
- [ ] Sistema de autenticación de usuarios
- [ ] Panel de administración para gestión de productos
- [ ] Wishlist y comparador de productos
- [ ] Sistema de reviews y calificaciones
- [ ] Integración con API de inventario real

## 👨‍💻 Autor

**Brayan Zarui**  
Estudiante de Ingeniería en Sistemas Computacionales  
[GitHub](https://github.com/brayanzarui-wq) | [LinkedIn](#)

## 📄 Licencia

Este proyecto es privado y está protegido por derechos de autor.
    `
  },
  {
    id: "p2",
    title: "Sistema POS - Cataleya Swimwear",
    description: "Punto de venta integral basado en la nube. Permite gestión de inventario en tiempo real, control de ventas, administración de catálogo multimedia y reportes analíticos.",
    tags: ["React", "Node.js", "Express", "AWS S3", "PostgreSQL"],
    // Updated to provided S3 link (HTTPS format)
    imageUrl: "https://cataleya-pos-images.s3.amazonaws.com/Captura%20de%20pantalla%202025-11-18%20191305.png",
    gallery: [
      "https://cataleya-pos-images.s3.amazonaws.com/Captura%20de%20pantalla%202025-11-18%20191305.png",
      "https://cataleya-pos-images.s3.amazonaws.com/Captura%20de%20pantalla%202025-11-18%20191112.png",
      "https://cataleya-pos-images.s3.amazonaws.com/Captura%20de%20pantalla%202025-11-18%20191131.png",
      "https://cataleya-pos-images.s3.amazonaws.com/Captura%20de%20pantalla%202025-11-18%20191146.png",
      "https://cataleya-pos-images.s3.amazonaws.com/Captura%20de%20pantalla%202025-11-18%20191152.png",
      "https://cataleya-pos-images.s3.amazonaws.com/Captura%20de%20pantalla%202025-11-18%20191238.png",
      "https://cataleya-pos-images.s3.amazonaws.com/Captura%20de%20pantalla%202025-11-18%20191250.png",
      "https://cataleya-pos-images.s3.amazonaws.com/Captura%20de%20pantalla%202025-11-18%20191043.png",
      "https://cataleya-pos-images.s3.amazonaws.com/Captura%20de%20pantalla%202025-11-18%20191305.png",
      "https://cataleya-pos-images.s3.amazonaws.com/Captura%20de%20pantalla%202025-11-18%20191316.png",
      "https://cataleya-pos-images.s3.amazonaws.com/Captura%20de%20pantalla%202025-11-18%20191352.png",
      "https://cataleya-pos-images.s3.amazonaws.com/Captura%20de%20pantalla%202025-11-18%20191415.png"
    ],
    workflow: [
      { 
        title: "Análisis de Requerimientos", 
        description: "Levantamiento de información sobre el flujo de ventas de la tienda física. Entrevistas con el cliente para entender necesidades específicas de gestión de inventario, categorías de productos (tops, bottoms, one-pieces) y control de tallas." 
      },
      { 
        title: "Diseño de Base de Datos", 
        description: "Modelado relacional en PostgreSQL con tablas para productos, ventas, detalles de venta, usuarios y categorías. Implementación de relaciones many-to-many para productos-categorías y normalización hasta 3FN." 
      },
      { 
        title: "Backend API RESTful", 
        description: "Desarrollo de servicios con Node.js y Express. Implementación de endpoints para CRUD de productos, procesamiento de ventas, autenticación JWT y generación de reportes. Middleware para validación de datos y manejo de errores centralizado." 
      },
      { 
        title: "Integración AWS S3", 
        description: "Configuración del SDK de AWS para subida segura de imágenes de productos. Implementación de presigned URLs para acceso temporal, optimización de imágenes antes de la carga y organización en buckets por categoría." 
      },
      { 
        title: "Frontend Administrativo", 
        description: "Panel de control en React con dashboard interactivo, formularios de gestión de productos con drag & drop para imágenes, tabla de ventas con paginación y filtros, y gráficos de ventas usando Chart.js." 
      }
    ],
    link: "https://mi-pos-frontend.vercel.app/",
    github: "https://github.com/brayanzarui-wq/mi-pos-frontend",
    githubBackend: "https://github.com/brayanzarui-wq/mi-pos-backend",
    isPrivate: true,
    manualUrl: "https://cataleya-pos-images.s3.amazonaws.com/Sistema%20POS%20Swimwear.pdf", // Updated path to S3
    readmeContent: `
# Sistema POS - Cataleya Swimwear 👙

> **Nota de Privacidad:** Este repositorio es privado debido a acuerdos de confidencialidad con el cliente. A continuación se presenta una descripción técnica detallada de la arquitectura y soluciones implementadas sin exponer información sensible del negocio.

## 🎯 Descripción del Proyecto

Sistema de Punto de Venta (POS) cloud-based desarrollado para Cataleya Swimwear, una tienda especializada en trajes de baño. La solución permite gestionar inventario, procesar ventas, controlar usuarios y generar reportes analíticos, todo desde una interfaz web moderna y responsive.

El proyecto está dividido en dos repositorios independientes:
- **Frontend:** React SPA desplegada en Vercel
- **Backend:** API REST en Node.js desplegada en Vercel/Render

## 🏗️ Arquitectura del Sistema

### Diagrama de Arquitectura

\`\`\`
┌─────────────┐      HTTPS/REST      ┌──────────────┐
│   Cliente   │ ◄─────────────────► │   Backend    │
│  (React)    │      (JWT Auth)      │  (Node.js)   │
└─────────────┘                      └──────┬───────┘
                                            │
                                            │
                          ┌─────────────────┼─────────────────┐
                          │                 │                 │
                          ▼                 ▼                 ▼
                    ┌──────────┐      ┌──────────┐    ┌──────────┐
                    │   AWS    │      │PostgreSQL│    │  Vercel  │
                    │    S3    │      │   (DB)   │    │ (Deploy) │
                    └──────────┘      └──────────┘    └──────────┘
\`\`\`

### Backend (Node.js + Express)

**Tecnologías Core:**
- **Runtime:** Node.js v18+
- **Framework:** Express.js
- **Base de Datos:** PostgreSQL
- **ORM:** Sequelize
- **Autenticación:** JWT (JSON Web Tokens)
- **Validación:** Joi
- **Cloud Storage:** AWS SDK v3

**Estructura del Backend:**

\`\`\`bash
mi-pos-backend/
├── src/
│   ├── config/              # Configuraciones
│   │   ├── database.js     # Conexión a PostgreSQL
│   │   └── aws.js          # Config AWS S3
│   ├── controllers/        # Lógica de negocio
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── saleController.js
│   │   └── userController.js
│   ├── middlewares/        # Middlewares
│   │   ├── auth.js         # Verificación JWT
│   │   ├── validator.js    # Validación Joi
│   │   └── errorHandler.js # Manejo de errores
│   ├── models/             # Modelos Sequelize
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Sale.js
│   │   └── SaleDetail.js
│   ├── routes/             # Rutas de la API
│   │   ├── auth.routes.js
│   │   ├── products.routes.js
│   │   ├── sales.routes.js
│   │   └── users.routes.js
│   ├── services/           # Servicios externos
│   │   ├── s3Service.js    # Subida de imágenes
│   │   └── emailService.js # Notificaciones
│   └── utils/              # Utilidades
│       ├── logger.js
│       └── helpers.js
├── .env.example
├── package.json
└── server.js              # Punto de entrada
\`\`\`

**Endpoints Principales:**

\`\`\`javascript
// Autenticación
POST   /api/auth/login
POST   /api/auth/register
POST   /api/auth/refresh

// Productos
GET    /api/products          // Listar todos
GET    /api/products/:id      // Obtener uno
POST   /api/products          // Crear (requiere admin)
PUT    /api/products/:id      // Actualizar
DELETE /api/products/:id      // Eliminar
POST   /api/products/:id/image // Subir imagen a S3

// Ventas
GET    /api/sales             // Listar ventas
GET    /api/sales/:id         // Detalle de venta
POST   /api/sales             // Procesar nueva venta
GET    /api/sales/reports     // Reportes analíticos

// Usuarios
GET    /api/users             // Listar usuarios (admin)
PUT    /api/users/:id         // Actualizar usuario
DELETE /api/users/:id         // Eliminar usuario
\`\`\`

### Frontend (React)

**Tecnologías Core:**
- **Librería:** React 18
- **Enrutamiento:** React Router v6
- **Estado Global:** Context API + useReducer
- **HTTP Client:** Axios
- **Estilos:** Tailwind CSS
- **Gráficos:** Chart.js / Recharts
- **Formularios:** React Hook Form + Yup

**Estructura del Frontend:**

\`\`\`bash
mi-pos-frontend/
├── src/
│   ├── components/          # Componentes UI
│   │   ├── common/         # Componentes reutilizables
│   │   │   ├── Button.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── Table.jsx
│   │   ├── products/       # Módulo de productos
│   │   │   ├── ProductList.jsx
│   │   │   ├── ProductForm.jsx
│   │   │   └── ProductCard.jsx
│   │   └── sales/          # Módulo de ventas
│   │       ├── SalesList.jsx
│   │       ├── NewSale.jsx
│   │       └── SaleDetail.jsx
│   ├── context/            # Contextos
│   │   ├── AuthContext.jsx
│   │   └── CartContext.jsx
│   ├── hooks/              # Custom hooks
│   │   ├── useAuth.js
│   │   ├── useProducts.js
│   │   └── useSales.js
│   ├── pages/              # Páginas principales
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Products.jsx
│   │   └── Sales.jsx
│   ├── services/           # Servicios API
│   │   ├── api.js          // Instancia Axios
│   │   ├── authService.js
│   │   ├── productService.js
│   │   └── saleService.js
│   ├── utils/              # Utilidades
│   │   ├── formatters.js
│   │   └── validators.js
│   └── App.jsx
├── public/
├── tailwind.config.js
└── package.json
\`\`\`

## ☁️ Integración con AWS S3

### Problema a Resolver
Necesidad de almacenar imágenes de productos de forma escalable, segura y con acceso rápido, sin sobrecargar el servidor ni la base de datos.

### Solución Implementada

**1. Configuración del Cliente S3:**

\`\`\`javascript
// src/config/aws.js
import { S3Client } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

export default s3Client;
\`\`\`

**2. Servicio de Subida:**

\`\`\`javascript
// src/services/s3Service.js
import { PutObjectCommand } from '@aws-sdk/client-s3';
import s3Client from '../config/aws.js';
import crypto from 'crypto';

export const uploadToS3 = async (file) => {
  try {
    // Generar nombre único
    const fileExtension = file.name.split('.').pop();
    const uniqueFileName = \`products/\${crypto.randomUUID()}.\${fileExtension}\`;
    
    // Parámetros de subida
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: uniqueFileName,
      Body: file.data,
      ContentType: file.mimetype,
      ACL: 'public-read' // O 'private' según necesidad
    };
    
    // Ejecutar subida
    const command = new PutObjectCommand(params);
    await s3Client.send(command);
    
    // Retornar URL pública
    const imageUrl = \`https://\${process.env.AWS_BUCKET_NAME}.s3.\${process.env.AWS_REGION}.amazonaws.com/\${uniqueFileName}\`;
    
    return { success: true, url: imageUrl };
  } catch (error) {
    console.error('Error al subir a S3:', error);
    throw new Error('Error al procesar la imagen');
  }
};

export const deleteFromS3 = async (fileKey) => {
  // Implementación de eliminación
  // ...
};
\`\`\`

**3. Endpoint en el Backend:**

\`\`\`javascript
// src/controllers/productController.js
import { uploadToS3 } from '../services/s3Service.js';

export const uploadProductImage = async (req, res) => {
  try {
    if (!req.files || !req.files.image) {
      return res.status(400).json({ error: 'No se proporcionó imagen' });
    }
    
    const { id } = req.params;
    const product = await Product.findByPk(id);
    
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    
    // Subir a S3
    const result = await uploadToS3(req.files.image);
    
    // Actualizar URL en la base de datos
    product.imageUrl = result.url;
    await product.save();
    
    res.json({ 
      message: 'Imagen subida exitosamente',
      imageUrl: result.url 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
\`\`\`

**Beneficios de esta Arquitectura:**
- ✅ Almacenamiento ilimitado y escalable
- ✅ URLs permanentes y accesibles globalmente
- ✅ Reduce carga del servidor backend
- ✅ Mejor performance de carga de imágenes
- ✅ Backup automático por AWS

## 🔒 Seguridad Implementada

### 1. Autenticación JWT

\`\`\`javascript
// Middleware de autenticación
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Token inválido' });
  }
};
\`\`\`

### 2. Helmet.js para Headers HTTP Seguros

\`\`\`javascript
import helmet from 'helmet';

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", "https://cataleya-swimwear.s3.amazonaws.com"]
    }
  }
}));
\`\`\`

### 3. Rate Limiting

\`\`\`javascript
import rateLimit from 'express-rate-limit';

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // 5 intentos
  message: 'Demasiados intentos, intenta más tarde'
});

app.post('/api/auth/login', loginLimiter, authController.login);
\`\`\`

### 4. Sanitización de Inputs

\`\`\`javascript
import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().trim().min(3).max(100).required(),
  price: Joi.number().positive().required(),
  stock: Joi.number().integer().min(0).required(),
  category: Joi.string().valid('tops', 'bottoms', 'one-piece').required()
});
\`\`\`

## 🔄 Flujo de una Venta (Workflow Completo)

\`\`\`
1. Usuario inicia sesión → JWT generado
   ↓
2. Navega a "Nueva Venta"
   ↓
3. Busca productos por nombre/código
   ↓
4. Agrega productos al carrito (Context API)
   ↓
5. Ajusta cantidades y verifica stock
   ↓
6. Confirma venta → POST /api/sales
   ↓
7. Backend valida stock disponible
   ↓
8. Crea registro en tabla Sales
   ↓
9. Crea registros en SaleDetails (ítems)
   ↓
10. Actualiza stock de productos
   ↓
11. Retorna confirmación + ID de venta
   ↓
12. Frontend muestra comprobante imprimible
\`\`\`

## 🚀 Instalación y Despliegue

### Backend

\`\`\`bash
# Clonar repositorio
git clone https://github.com
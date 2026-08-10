import grpcOverview from '../assets/grpc_project_overview.png'
import fullstackLogo from '../assets/fullstack_logo.png'
import textSimplifierImg from '../assets/text_simplifier.svg'
import shareMyCarImg from '../assets/sharemycar_img.png'
import textSimplifierPng from '../assets/textsimplifier_img.png'
 
import fullstackScreenshot400 from '../assets/fullstack_screenshot-400.png'
import fullstackScreenshot800 from '../assets/fullstack_screenshot-800.png'

const projects = [
  {
    id: 'grpc-he-benchmark',
    name: 'Homomorphic Encryption Benchmark Framework',
    short: 'Distributed benchmarking framework for homomorphic encryption and encrypted neural network inference.',
    why: 'Evaluates performance and network overhead for privacy-preserving computation across distributed systems.',
    bullets: [
      'End-to-end encrypted CNN inference using FHE libraries (OpenFHE, SEAL, HElib)',
      'Three-tier architecture: React → Spring Boot → Rust gRPC → C++ HE wrappers',
      'Live per-layer timings streamed to the browser (SSE) and cross-library comparison'
    ],
    tech: ['Rust','gRPC','Docker','Encrypted inference','Distributed systems'],
    repo: 'https://github.com/TiffanyYongNgikChee/grpc-he-benchmark',
    demo: 'https://hexplore-neon.vercel.app',
    image: grpcOverview
  },
  {
    id: 'share-my-car',
    name: 'Share My Car (Mobile)',
    short: 'Cross-platform mobile app for car listings, bookings, real-time location and chat.',
    why: 'Production-style mobile app demonstrating Ionic + Angular with Firebase auth, real-time chat and Google Maps integration.',
    bullets: [
      'Ionic + Angular cross-platform UI with responsive design',
      'Firebase authentication and real-time chat for user interaction',
      'Google Maps integration for live location and pickup visualization'
    ],
    tech: ['Ionic','Angular','TypeScript','Firebase','Google Maps'],
    repo: 'https://github.com/TiffanyYongNgikChee/share-my-car',
    image: shareMyCarImg
  },
  {
    id: 'text-simplifier',
    name: 'Text Simplification System',
    short: 'Java command-line tool that simplifies English while preserving meaning using word embeddings.',
    why: 'Uses cosine similarity against Google’s top-1000 words and supports Java virtual threads for responsive processing.',
    bullets: [
      'Semantic word replacement using pre-trained embeddings and cosine similarity',
      'Preserves sentence meaning while replacing complex words with common alternatives',
      'Designed for performance with support for Java virtual threads'
    ],
    tech: ['Java','NLP','Word embeddings','Virtual threads'],
    repo: 'https://github.com/TiffanyYongNgikChee/TextSimplifier',
    image: textSimplifierPng
  },
  {
    id: 'full-stack-project',
    name: 'Full-Stack Data Representation',
    short: 'Full-stack application demonstrating data representation, querying and front-end integration.',
    why: 'End-to-end web app highlighting API design, data validation and UI presentation.',
    bullets: [
      'Full-stack REST API with data validation and CRUD workflows',
      'React frontend demonstrating effective data presentation and UX',
      'Focus on data modelling and query efficiency'
    ],
    tech: ['JavaScript','React','APIs'],
    repo: 'https://github.com/TiffanyYongNgikChee/full-stack-project',
    image: fullstackScreenshot800,
    imageSmall: fullstackScreenshot400
  }
]

export default projects

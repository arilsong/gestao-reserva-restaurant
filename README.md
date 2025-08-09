# 🍽️ Sistema de Gestão de Reservas de Restaurante

Um sistema completo para gerenciamento de reservas de mesas em restaurantes, desenvolvido com Spring Boot (Backend) e React + TypeScript (Frontend).

## 📋 Descrição

Este projeto é uma solução completa para restaurantes gerenciarem suas reservas de mesas de forma eficiente. O sistema permite que clientes façam reservas online e que restaurantes administrem suas mesas, funcionários e reservas através de dashboards intuitivos.

## 🏗️ Arquitetura

O projeto está dividido em duas partes principais:

- **Backend (API)**: Desenvolvido em Java com Spring Boot
- **Frontend**: Desenvolvido em React com TypeScript

## 🚀 Tecnologias Utilizadas

### Backend
- **Java 17**
- **Spring Boot 3.5.0**
- **Spring Data JPA**
- **Spring Security**
- **PostgreSQL** (Banco de dados)
- **JWT** (Autenticação)
- **Lombok**
- **Maven**

### Frontend
- **React 18**
- **TypeScript**
- **Vite** (Build tool)
- **Tailwind CSS**
- **Shadcn/ui** (Componentes)
- **React Router DOM**
- **React Hook Form**
- **Axios**
- **TanStack Query**
- **Radix UI**

## 📁 Estrutura do Projeto

```
gestao-reserva-restaurant-main/
├── api/                          # Backend Spring Boot
│   ├── src/main/java/com/reservafacil/api/
│   │   ├── config/              # Configurações
│   │   ├── controllers/         # Controladores REST
│   │   ├── dto/                 # Data Transfer Objects
│   │   ├── entities/            # Entidades JPA
│   │   ├── enums/               # Enumerações
│   │   ├── exceptions/          # Tratamento de exceções
│   │   ├── repositories/        # Repositórios de dados
│   │   ├── security/            # Configurações de segurança
│   │   └── services/            # Lógica de negócio
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml
├── react/                        # Frontend React
│   ├── src/
│   │   ├── components/          # Componentes reutilizáveis
│   │   ├── context/             # Contextos React
│   │   ├── hooks/               # Hooks customizados
│   │   ├── interfaces/          # Interfaces TypeScript
│   │   ├── lib/                 # Utilitários
│   │   ├── pages/               # Páginas da aplicação
│   │   ├── routes/              # Configuração de rotas
│   │   └── service/             # Serviços de API
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

## 🗄️ Modelo de Dados

### Entidades Principais

- **Restaurant**: Informações do restaurante (nome, endereço, telefone, etc.)
- **Tables**: Mesas disponíveis no restaurante
- **Client**: Dados dos clientes
- **Employee**: Funcionários do restaurante
- **Booking**: Reservas realizadas
- **Availability**: Disponibilidade das mesas
- **Review**: Avaliações dos clientes
- **User**: Usuários do sistema

## 🔐 Funcionalidades

### Para Clientes
- Registro e login
- Visualização de restaurantes
- Fazer reservas de mesas
- Gerenciar perfil
- Avaliar restaurantes

### Para Restaurantes
- Registro e login
- Dashboard de gerenciamento
- Gestão de mesas
- Visualização de reservas
- Gestão de funcionários
- Visualização de avaliações

## 🛠️ Pré-requisitos

- **Java 17** ou superior
- **Node.js 18** ou superior
- **PostgreSQL 12** ou superior
- **Maven 3.6** ou superior

## 📦 Instalação e Configuração

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd gestao-reserva-restaurant-main
```

### 2. Configuração do Banco de Dados

1. Crie um banco PostgreSQL chamado `restaurant_booking`
2. Configure as credenciais no arquivo `api/src/main/resources/application.properties`:
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:6442/restaurant_booking
   spring.datasource.username=postgres
   spring.datasource.password=root
   ```

### 3. Backend (API)

```bash
cd api
mvn clean install
mvn spring-boot:run
```

A API estará disponível em: `http://localhost:8080`

### 4. Frontend (React)

```bash
cd react
npm install
npm run dev
```

O frontend estará disponível em: `http://localhost:5173`

## 🔧 Configurações

### Variáveis de Ambiente

O projeto utiliza as seguintes configurações principais:

- **JWT Secret**: Configurado em `application.properties`
- **Porta do Banco**: 6442 (PostgreSQL)
- **Porta da API**: 8080 (Spring Boot)
- **Porta do Frontend**: 5173 (Vite)

## 📱 Páginas Principais

### Cliente
- `/cliente/login` - Login do cliente
- `/cliente/registro` - Registro do cliente
- `/cliente/dashboard` - Dashboard do cliente
- `/cliente/perfil` - Perfil do cliente

### Restaurante
- `/restaurante/login` - Login do restaurante
- `/restaurante/registro` - Registro do restaurante
- `/restaurante/dashboard` - Dashboard do restaurante
- `/restaurante/mesas` - Gestão de mesas
- `/restaurante/reservas` - Visualização de reservas
- `/restaurante/avaliacoes` - Avaliações recebidas

## 🚀 Deploy

### Backend
```bash
cd api
mvn clean package
java -jar target/api-0.0.1-SNAPSHOT.jar
```

### Frontend
```bash
cd react
npm run build
# Os arquivos estarão em dist/
```

## 🧪 Testes

### Backend
```bash
cd api
mvn test
```

### Frontend
```bash
cd react
npm run lint
```

## 📝 API Endpoints

A API inclui endpoints para:
- Autenticação (JWT)
- Gestão de restaurantes
- Gestão de mesas
- Gestão de reservas
- Gestão de clientes
- Gestão de funcionários
- Avaliações

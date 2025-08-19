# upvote Demo ⬆︎

A modern full-stack application built with Next.js, Prisma, PostgreSQL, and TypeScript in a Turborepo monorepo structure.

## What's Inside?

This repository contains the following packages and apps:

### Apps

- **`web`**: Main Next.js application with Tailwind CSS
- **`studio`**: Prisma Studio interface for database management

### Packages

- **`@repo/database`**: Database package with Prisma client, schema, and PostgreSQL setup
- **`@repo/ui`**: Shared React component library with shadcn/ui components
- **`@repo/eslint-config`**: Shared ESLint configurations
- **`@repo/typescript-config`**: Shared TypeScript configurations

## Prerequisites

- **Node.js** 18+
- **pnpm** 9.0.0+ (defined in `packageManager`)
- **Docker** (for PostgreSQL database)

## Getting Started

### 1. Clone and Install Dependencies

```bash
git clone https://github.com/konstantinmuenster/upvote-demo.git
cd upvote-demo
pnpm install
```

### 2. Database Setup

The project uses PostgreSQL running in Docker with Prisma as the ORM.

#### Start the Database

```bash
# Navigate to the database package
cd packages/database

# Start PostgreSQL with Docker Compose
pnpm db:up
```

This will start a PostgreSQL container with the following configuration:

- **Host**: localhost
- **Port**: 5433
- **Database**: upvote_demo_db
- **Username**: upvote_demo
- **Password**: upvote_demo

#### Set Up Environment Variables

Create a `.env` file in the `packages/database` directory:

```bash
# packages/database/.env
DATABASE_URL="postgresql://upvote_demo:upvote_demo@localhost:5433/upvote_demo_db"
```

#### Run Database Migrations

```bash
# From packages/database directory
pnpm db:migrate
```

This will:

- Apply the initial migration creating the `Feedback` table
- Generate the Prisma client
- Generate Zod schemas for type validation

#### Database Schema

The current schema includes:

- **Feedback** table with fields: `id`, `message`, `upvotes`, `createdAt`, `updatedAt`

### 3. Generate Database Client

```bash
# From packages/database directory
pnpm build
```

This generates the Prisma client and Zod schemas used throughout the application.

### 4. Start Development Servers

From the project root:

```bash
# Start all development servers
pnpm dev
```

This will start:

- **Web app**: http://localhost:3000
- **Prisma Studio**: http://localhost:3005 (database management interface)

You can also start individual apps:

```bash
# Start only the web app
turbo dev --filter=web

# Start only Prisma Studio
turbo dev --filter=studio
```

## Available Scripts

### Root Level Scripts

```bash
# Start all apps in development mode
pnpm dev

# Build all packages and apps
pnpm build

# Lint all packages and apps
pnpm lint

# Format code
pnpm format

# Type check all packages and apps
pnpm check-types
```

### Database Scripts

```bash
# From packages/database directory

# Start PostgreSQL container
pnpm db:up

# Run database migrations
pnpm db:migrate

# Generate Prisma client and Zod schemas
pnpm build
```

### Web App Scripts

```bash
# From apps/web directory

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Type check
pnpm check-types
```

## Project Structure

```
upvote-demo/
├── apps/
│   ├── web/                 # Next.js web application
│   └── studio/              # Prisma Studio app
├── packages/
│   ├── database/            # Database package with Prisma
│   │   ├── prisma/          # Prisma schema and migrations
│   │   ├── generated/       # Generated Prisma client and Zod schemas
│   │   └── docker-compose.yaml
│   ├── ui/                  # Shared UI components
│   ├── eslint-config/       # Shared ESLint config
│   └── typescript-config/   # Shared TypeScript config
└── package.json             # Root package.json with workspace scripts
```

## Technology Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Backend**: Prisma ORM, PostgreSQL
- **UI Components**: Radix UI, shadcn/ui components
- **Validation**: Zod
- **Build System**: Turborepo
- **Package Manager**: pnpm
- **TypeScript**: Full type safety across the monorepo

## Database Management

### Prisma Studio

Access the database management interface at http://localhost:3005 when running `pnpm dev`.

### Adding New Database Changes

1. Modify the schema in `packages/database/prisma/schema.prisma`
2. Run migrations: `pnpm db:migrate`
3. Regenerate client: `pnpm build`

### Resetting the Database

```bash
# From packages/database directory
docker compose down -v  # Remove container and volumes
pnpm db:up             # Start fresh container
pnpm db:migrate        # Apply migrations
```

## Development Workflow

1. **Database changes**: Modify schema → run migration → regenerate client
2. **UI components**: Add to `packages/ui` → import in `apps/web`
3. **Feature development**: Work in `apps/web` using shared packages
4. **Type safety**: Generated Prisma client and Zod schemas ensure end-to-end type safety

## Troubleshooting

### Database Connection Issues

- Ensure Docker is running
- Check if port 5433 is available
- Verify the DATABASE_URL environment variable

### Build Issues

- Run `pnpm install` from the root
- Ensure all packages are built: `pnpm build`
- Clear Turborepo cache: `rm -rf .turbo`

### Type Errors

- Regenerate Prisma client: `cd packages/database && pnpm build`
- Check TypeScript configuration in each package

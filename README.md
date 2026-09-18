# NextLevel Food

NextLevel Food is a recipe-sharing platform for discovering, preparing, and sharing meals from around the world. Visitors can browse community recipes, open detailed cooking instructions, and submit their own meals with an image and creator information.

Built with Next.js App Router, React Server Components, server actions, and a lightweight SQLite database.

## Features

- Browse a collection of community-submitted meals
- View recipe details, ingredients, instructions, and creator information
- Share a new meal through a validated form
- Upload and preview recipe images before submission
- Store meal data locally with SQLite
- Sanitize submitted instructions before saving them
- Responsive recipe-focused interface
- Custom loading, error, and not-found states

## Tech Stack

- **Framework:** Next.js 16 with the App Router
- **UI:** React 19 and CSS Modules
- **Database:** SQLite via `better-sqlite3`
- **Server actions:** Next.js server actions for meal submissions
- **Validation and security:** `slugify` and `xss`
- **Language:** JavaScript

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/<your-username>/<your-repository>.git
cd food-lover-website
npm install
```

The repository includes a local `meals.db` file containing sample recipes, so no database setup is required for the standard development flow.

If you are starting with a fresh checkout without `meals.db`, create and seed the database once:

```bash
node initdb.js
```

Do not run the seed script repeatedly against the same database because meal slugs are unique.

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimized production build |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint |

## Application Routes

| Route | Purpose |
| --- | --- |
| `/` | Home page with featured messaging and navigation |
| `/meals` | Browse all available meals |
| `/meals/[mealSlug]` | View a recipe and its cooking instructions |
| `/meals/share` | Submit a new recipe |
| `/community` | Explore the food community |

## Project Structure

```text
.
├── components/       # Reusable UI components
├── lib/              # Database access and server actions
├── public/images/    # Static and uploaded meal images
├── src/app/          # Next.js routes, layouts, and styles
├── initdb.js         # SQLite schema and sample data setup
├── meals.db          # Local SQLite database
└── package.json      # Scripts and dependencies
```

## Data and Uploads

This project is currently configured for local development:

- Meal records are stored in `meals.db`.
- Uploaded images are written to `public/images`.
- The database and uploaded files use the local filesystem.

For production deployment, replace the local SQLite and filesystem storage with a hosted database and durable object storage. This is especially important on platforms with ephemeral server filesystems.

## Production Build

To verify and run the production build locally:

```bash
npm run build
npm start
```

## Contributing

1. Create a feature branch.
2. Make focused changes and add or update validation where appropriate.
3. Run `npm run lint` and `npm run build`.
4. Open a pull request with a clear description of the change.

## License

No license has been specified yet. Add a license before accepting external contributions or distributing the project publicly.

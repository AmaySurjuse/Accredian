## Setup Instructions

Follow these steps to run the project locally on your machine:

### Prerequisites

*   **Node.js**: Ensure you have Node.js (v18 or higher) installed.
*   **MongoDB**: A MongoDB Atlas account and an active cluster.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <YOUR_REPO_URL_HERE>
    cd accredian-clone
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env.local` file in the root directory. 
    
    > **Note:** Never upload your real password to GitHub. Use the template below and replace the placeholders with your actual MongoDB credentials.

    ```env
    # Replace <YOUR_USERNAME> and <YOUR_PASSWORD> with your actual database credentials
    MONGODB_URI=mongodb+srv://<YOUR_USERNAME>:<YOUR_PASSWORD>@cluster0.xxxxx.mongodb.net/accredian_enterprise?retryWrites=true&w=majority
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **View the application:**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Approach Taken

The project was developed with a focus on modularity, performance, and modern UI/UX design:

*   **Framework & Architecture:** Utilized Next.js App Router for Server-Side Rendering (SSR) and seamless full-stack API route integration.
*   **Component-Driven Design:** The landing page is divided into modular, reusable React components (`HeroSection`, `FeaturesSection`, `FaqSection`, etc.). Below-the-fold components are dynamically loaded using Next.js dynamic imports to improve initial load time.
*   **Advanced UI/UX:** Implemented Tailwind CSS to create a highly responsive layout featuring glassmorphism, ambient glow effects, responsive bento grids, and interactive elements like auto-playing carousels and smooth accordions.
*   **Global State Management:** Designed a `ModalContext` to manage the state of the multi-step `EnquireModal` globally, allowing it to be triggered seamlessly from various parts of the application.
*   **Full-Stack API & Database:** Engineered a robust HTTP POST endpoint at `/api/leads` connected to MongoDB via Mongoose. Features connection caching to prevent serverless function bottlenecks and extensive form validation.

---

## AI Usage Explanation

Artificial Intelligence was leveraged as an active pair-programmer throughout the development lifecycle to accelerate building and troubleshooting:

*   **Component Scaffolding:** Used AI to rapidly generate boilerplate code for React functional components and context providers.
*   **UI Styling & Layouts:** Assisted in crafting complex Tailwind CSS classes to achieve enterprise-grade aesthetics, such as frosted glass effects, gradient text, and responsive SVG icons.
*   **Backend & Logic Integration:** Consulted AI to structure the Mongoose schemas, implement Next.js API routes securely, and write rigorous Regex/validation logic for the multi-step lead capture form.
*   **Debugging & Deployment:** Relied on AI to debug deployment issues on Vercel, specifically resolving 500 Internal Server Errors caused by MongoDB IP whitelisting and missing production environment variables.

---

## Improvements With More Time

If allocated more time, the following enhancements would be prioritized:

*   **Automated Email Notifications:** Integrate an email service (like Resend or Nodemailer) to send an automated confirmation email to the user and a notification to the sales team upon successful form submission.
*   **Security & Rate Limiting:** Implement API rate-limiting (e.g., using Upstash/Redis) on the `/api/leads` endpoint to protect the database from spam submissions or DDoS attacks.
*   **Comprehensive Testing:** Introduce unit tests for UI components using Jest and React Testing Library, alongside End-to-End (E2E) testing for the critical lead capture flow using Cypress or Playwright.
*   **Admin Dashboard:** Build a secure, authenticated internal dashboard (using NextAuth.js) for the Accredian team to view, filter, and export captured leads via CSV.
*   **Advanced SEO & Analytics:** Inject JSON-LD schema markup for better search engine understanding and integrate a lightweight analytics provider to track user interaction across the multi-step form.

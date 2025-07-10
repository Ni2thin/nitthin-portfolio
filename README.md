# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, interactive components, and optimized performance.

## 🚀 Features

- **Modern Design**: Clean and professional portfolio layout
- **Responsive**: Optimized for all device sizes
- **Performance**: Built with Next.js 14 for optimal speed
- **Animations**: Smooth transitions and interactive elements
- **SEO Optimized**: Built-in SEO features
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Deployment**: Vercel

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy your portfolio is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. **Push to GitHub**: Make sure your code is pushed to a GitHub repository
2. **Connect to Vercel**: 
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
3. **Deploy**: Vercel will automatically detect it's a Next.js project and deploy with optimal settings

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📁 Project Structure

```
├── app/                 # Next.js 14 app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   ├── About.tsx      # About section
│   ├── Experience.tsx # Experience section
│   ├── Hero.tsx       # Hero section
│   ├── Projects.tsx   # Projects section
│   └── ...
├── public/            # Static assets
│   ├── images/        # Image files
│   └── fonts/         # Font files
└── lib/               # Utility functions
```

## 🔧 Configuration

- **Next.js Config**: `next.config.mjs` - Optimized for production
- **Tailwind Config**: `tailwind.config.ts` - Custom styling configuration
- **TypeScript Config**: `tsconfig.json` - TypeScript settings

## 📝 Customization

1. **Content**: Update the content in each component file
2. **Styling**: Modify `tailwind.config.ts` for theme changes
3. **Images**: Replace images in `public/images/`
4. **Colors**: Update color scheme in `tailwind.config.ts`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/)

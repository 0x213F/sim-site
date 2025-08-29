# Static Website with Multi-Branch GitHub Pages Deployment

A responsive static website with automated multi-branch deployment to GitHub Pages. Each branch gets its own deployment URL, making it perfect for feature previews and collaborative development.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with flexible layouts
- **Multi-Branch Deployment**: Each branch gets its own GitHub Pages URL
- **Automated CI/CD**: GitHub Actions workflow for seamless deployment
- **Development Server**: Local development with live reload
- **Clean Architecture**: Organized file structure and modern web practices

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── css/
│   └── style.css              # Responsive styles
├── js/
│   └── main.js                # Interactive functionality
├── index.html                 # Main HTML file
├── package.json              # Node.js dependencies and scripts
├── .gitignore                # Git ignore rules
└── README.md                 # This file
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- Git
- A GitHub account

### Local Development

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```
   
   This will start a live server at `http://localhost:3000` with auto-reload.

4. **Alternative server command**:
   ```bash
   npm run serve
   ```
   This starts an HTTP server at `http://localhost:8080`.

## 🌐 GitHub Pages Deployment Setup

### Step 1: Repository Setup

1. **Create a new GitHub repository** or push this code to an existing one.

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "GitHub Actions"

### Step 2: Configure Branch Protection (Optional but Recommended)

1. Go to Settings → Branches
2. Add a branch protection rule for `main` (or `master`)
3. Enable "Require status checks to pass before merging"

### Step 3: Deploy!

The deployment happens automatically:

- **Main/Master Branch**: Deploys to root domain (`https://username.github.io/repo-name/`)
- **Feature Branches**: Deploy to subdirectories (`https://username.github.io/repo-name/branch-name/`)

## 🔄 Deployment Workflow

### How It Works

1. **Trigger**: Pushes to any branch trigger the workflow
2. **Build**: The site is built and prepared for deployment
3. **Main Branch**: Deploys directly to the root GitHub Pages URL
4. **Feature Branches**: Deploy to branch-specific subdirectories

### Branch Deployment URLs

- **Main branch**: `https://username.github.io/repo-name/`
- **Feature branch**: `https://username.github.io/repo-name/feature-branch/`
- **Branch index**: `https://username.github.io/repo-name/branches.html` (lists all deployed branches)

### Example Workflow

```bash
# Create a new feature branch
git checkout -b feature/new-design

# Make your changes
# ... edit files ...

# Commit and push
git add .
git commit -m "Add new design features"
git push origin feature/new-design

# Your branch is now automatically deployed to:
# https://username.github.io/repo-name/feature-new-design/
```

## 🎨 Customization

### Styling
- Edit `css/style.css` for custom styles
- The CSS uses CSS Grid and Flexbox for responsive layouts
- Color scheme and animations can be easily modified

### Content
- Update `index.html` for content changes
- The site includes semantic HTML5 structure
- Meta tags are configured for SEO

### Functionality
- Modify `js/main.js` for custom JavaScript
- Includes smooth scrolling, animations, and branch detection
- Easily extensible for additional features

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Available Scripts

- `npm start`: Start development server with live reload
- `npm run serve`: Start basic HTTP server
- `npm run build`: Echo message (no build process needed for static site)

## 🐛 Troubleshooting

### Common Issues

1. **Pages not updating**: 
   - Check the Actions tab for deployment status
   - Ensure GitHub Pages is enabled in repository settings

2. **Branch deployments not working**:
   - Verify the workflow has permissions to write to the repository
   - Check that the `gh-pages` branch exists and is set as the source

3. **CSS/JS not loading on branch deployments**:
   - The workflow automatically updates paths for subdirectory deployments
   - Check browser developer tools for 404 errors

### Deployment Status

You can monitor deployments in:
- Repository → Actions tab
- Repository → Environments → github-pages

## 📄 License

MIT License - feel free to use this project as a template for your own static websites.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Push to your fork
5. Create a pull request

Your changes will be automatically deployed to a preview URL for testing!

---

**Happy coding!** 🎉

For more information about GitHub Pages deployment, visit the [GitHub Pages documentation](https://docs.github.com/en/pages).
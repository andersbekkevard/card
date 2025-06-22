# Anders Bekkevard - NPX Business Card

A personal business card that runs in the terminal via NPX.

## Usage

```bash
npx andersbekkevard
```

## Development

### Project Structure

- `index.js` - Main business card (clean, production-ready)
- `menu.js` - Interactive menu functionality (modular, optional)
- `package.json` - NPM package configuration

### Enabling Interactive Menu

To add interactive menu functionality:

1. **Install dev dependencies:**
   ```bash
   npm install
   ```

2. **Uncomment the import in `index.js`:**
   ```javascript
   import { showInteractiveMenu } from "./menu.js";
   ```

3. **Uncomment the menu activation in `index.js`:**
   ```javascript
   console.log(colors.subdued("\nTip: Try option + click on the links above"));
   await showInteractiveMenu();
   ```

4. **Update package.json dependencies:**
   Move `inquirer` from `devDependencies` to `dependencies`

5. **Add menu.js to files array in package.json:**
   ```json
   "files": ["index.js", "menu.js"]
   ```

### Publishing

```bash
npm login
npm publish
```

## Features

- 🎨 **Colorful Design** - Cyan and magenta accent colors
- 📱 **Responsive Layout** - Dynamic width calculation
- 🔗 **Clickable Links** - Works in compatible terminals
- 🚀 **Fast & Lightweight** - Only ~2KB package size
- 🔧 **Modular** - Easy to enable/disable interactive features

## License

MIT 
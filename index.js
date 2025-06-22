#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
import chalk from "chalk";
import boxen from "boxen";

// ========================================
// INTERACTIVE MENU (CURRENTLY DISABLED)
// ========================================
// Uncomment the line below to enable interactive menu functionality
// import { showInteractiveMenu } from "./menu.js";

// ========================================
// COLOR PALETTE
// ========================================
// Centralized color management - change colors here to update entire card
const colors = {
	// Primary elements
	name: chalk.whiteBright.bold,
	text: chalk.white,

	// Accent colors
	primary: chalk.cyanBright,        // #00ffff - Friendly, futuristic (links, phone, email)
	secondary: chalk.magentaBright,   // #ff00ff - Energetic contrast (border, sectioning)

	// Supporting colors
	subdued: chalk.gray,              // Less important text
	labels: chalk.white.bold          // Contact labels
};

// ========================================
// CARD CONFIGURATION
// ========================================
// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: "round",
	borderColor: "magentaBright"  // Use secondary accent for border
};

// Contact labels for dynamic alignment
const contactLabels = ["Phone:", "Email:", "LinkedIn:", "GitHub:"];
const maxLabelLength = Math.max(...contactLabels.map(label => label.length));

// ========================================
// CARD CONTENT
// ========================================
// Text + chalk definitions using color palette
const data = {
	name: colors.name("Anders Bekkevard"),
	handle: colors.subdued("/ andersbekkevard"),
	student: colors.secondary.italic("MSc Student | Industrial Economics + CS @ NTNU"),

	// Contact info with dynamically aligned colons using color palette
	phone: colors.labels("Phone:".padStart(maxLabelLength) + " ") + colors.primary("+47 477 13 187"),
	email: colors.labels("Email:".padStart(maxLabelLength) + " ") + colors.primary("anders.bekkevard@gmail.com"),
	linkedin: colors.labels("LinkedIn:".padStart(maxLabelLength) + " ") + colors.subdued("https://www.linkedin.com/in/") + colors.primary("anders-bekkevard") + colors.subdued("-a41b451b5"),
	github: colors.labels("GitHub:".padStart(maxLabelLength) + " ") + colors.subdued("https://github.com/") + colors.primary("andersbekkevard"),

	npx: colors.subdued("npx andersbekkevard")
};

// ========================================
// CARD LAYOUT
// ========================================
const newline = "\n";

// Calculate content width for dynamic separator
const contentLines = [
	`${data.name} ${data.handle}`,
	data.student,
	data.phone,
	data.email,
	data.linkedin,
	data.github
];
const maxContentWidth = Math.max(...contentLines.map(line => line.replace(/\u001b\[[0-9;]*m/g, '').length));
const separator = colors.text("─".repeat(maxContentWidth));

// Put all our output together into a single variable so we can use boxen effectively
const output =
	`${data.name} ${data.handle}` +
	newline +
	data.student +
	newline +
	newline +
	data.phone +
	newline +
	data.email +
	newline +
	data.linkedin +
	newline +
	data.github +
	newline +
	newline +
	separator +
	newline +
	" ".repeat(Math.max(0, maxContentWidth - data.npx.replace(/\u001b\[[0-9;]*m/g, '').length)) + data.npx;

// ========================================
// DISPLAY CARD
// ========================================
console.log(chalk.green(boxen(output, options)));

// ========================================
// INTERACTIVE MENU (CURRENTLY DISABLED)
// ========================================
// Uncomment the lines below to enable interactive menu functionality:
//
// console.log(colors.subdued("\nTip: Try option + click on the links above"));
// await showInteractiveMenu();
// console.log(colors.subdued("\n👋 Thanks for checking out my card!")); 
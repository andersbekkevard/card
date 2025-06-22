#!/usr/bin/env node

import inquirer from "inquirer";
import { exec } from "child_process";
import { promisify } from "util";
import chalk from "chalk";

const execAsync = promisify(exec);

// Color palette - matches main card colors
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

export async function showInteractiveMenu() {
	// Interactive menu
	console.log(colors.subdued("\nTip: Try option + click on the links above\n"));

	const menuQuestion = {
		type: 'list',
		name: 'action',
		message: colors.text.bold('What you want to do?'),
		choices: [
			{
				name: `📬 Send me an email?`,
				value: 'email'
			},
			{
				name: `📝 Download my CV?`,
				value: 'resume'
			},
			{
				name: `🚪 Just quit.`,
				value: 'quit'
			}
		]
	};

	try {
		const answer = await inquirer.prompt(menuQuestion);

		switch (answer.action) {
			case 'email':
				console.log(colors.primary('\n📬 Opening email client...'));
				try {
					await execAsync('open mailto:anders.bekkevard@gmail.com');
					console.log(colors.text('✅ Email client opened successfully!'));
				} catch (error) {
					console.log(colors.primary('📬 Email: ') + colors.text('anders.bekkevard@gmail.com'));
				}
				break;

			case 'resume':
				console.log(colors.secondary('\n📝 Downloading resume...'));
				try {
					// Replace this URL with your actual resume download link
					const resumeUrl = 'https://github.com/andersbekkevard/card/releases/download/v1.0/Anders-Bekkevard-CV.pdf';
					await execAsync(`open "${resumeUrl}"`);
					console.log(colors.text('✅ Resume download started successfully!'));
				} catch (error) {
					console.log(colors.secondary('📝 Resume URL: ') + colors.text('https://github.com/andersbekkevard'));
					console.log(colors.subdued('   (Download link will be available once uploaded to GitHub releases)'));
				}
				break;

			case 'quit':
				console.log(colors.subdued('\n👋 Thanks for checking out my card!'));
				break;
		}
	} catch (error) {
		if (error.isTtyError) {
			// Non-interactive environment, just show the card
		} else {
			console.log(colors.subdued('\n👋 Thanks for checking out my card!'));
		}
	}
} 
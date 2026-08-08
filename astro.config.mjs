// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
	site: 'https://joshymcd.github.io',
	base: '/engineering-playbook',
	integrations: [
		starlight({
			title: 'Engineering Playbook',
			description:
				'Conventions for building and shipping Josh McDonald applications.',
			favicon: '/engineering-playbook/favicon.svg',
			customCss: ['./src/styles/custom.css'],
			lastUpdated: true,
			social: [
				{
					icon: 'github',
					label: 'GitHub profile',
					href: 'https://github.com/joshymcd',
				},
			],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Principles', slug: 'foundations/principles' },
						{
							label: 'Choosing the Stack',
							slug: 'foundations/choosing-the-stack',
						},
					],
				},
				{
					label: 'Application Architecture',
					items: [
						{ label: 'TanStack Start', slug: 'application/tanstack-start' },
						{
							label: 'Code Organization',
							slug: 'application/code-organization',
						},
						{ label: 'Data and State', slug: 'application/data-and-state' },
						{
							label: 'Domain and Server',
							slug: 'application/domain-and-server',
						},
						{
							label: 'Authentication and Security',
							slug: 'application/auth-and-security',
						},
					],
				},
				{
					label: 'Frontend',
					items: [
						{ label: 'Design System', slug: 'frontend/design-system' },
						{
							label: 'Forms and Feedback',
							slug: 'frontend/forms-and-feedback',
						},
						{
							label: 'Accessibility and Responsive UI',
							slug: 'frontend/accessibility',
						},
					],
				},
				{
					label: 'Delivery',
					items: [
						{ label: 'Testing', slug: 'delivery/testing' },
						{
							label: 'SST and Deployment',
							slug: 'delivery/sst-and-deployment',
						},
						{ label: 'CI and GitHub', slug: 'delivery/ci-and-github' },
					],
				},
				{
					label: 'Ways of Working',
					items: [
						{
							label: 'Repository Tooling',
							slug: 'workflow/repository-tooling',
						},
						{
							label: 'Agent Collaboration',
							slug: 'workflow/agent-collaboration',
						},
						{ label: 'Git Workflow', slug: 'workflow/git-workflow' },
					],
				},
				{
					label: 'Reference',
					items: [
						{
							label: 'New Project Checklist',
							slug: 'reference/new-project-checklist',
						},
						{ label: 'Anti-patterns', slug: 'reference/anti-patterns' },
					],
				},
			],
		}),
	],
})

import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from 'classnames';
import { Metadata } from "next";

import { baseURL, style, schema, social } from "@/once-ui/resources/config"

import { Background, Flex } from '@/once-ui/components'

import { Inter } from 'next/font/google'
import { Roboto_Mono } from 'next/font/google';

const primary = Inter({
	variable: '--font-primary',
	subsets: ['latin'],
	display: 'swap',
})

const code = Roboto_Mono({
	variable: '--font-code',
	subsets: ['latin'],
	display: 'swap',
});

type FontConfig = {
    variable: string;
};

const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;
/*
*/

export const metadata: Metadata = {
	title: 'Sanchay Shetty | Portfolio ',
	description: 'Frontend Developer and Final-year undergraduate at PES University',
	keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio'],
	authors: [{ name: 'Sanchay Shetty' }],
	openGraph: {
		title: 'Sanchay Shetty | Portfolio',
		description: 'Frontend Developer and Final-year undergraduate at PES University',
		url: 'https://sanchayshetty.com',
		siteName: 'Sanchay Shetty',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Sanchay Shetty Portfolio'
			}
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Sanchay Shetty | Portfolio',
		description: 'Frontend Developer and Final-year undergraduate at PES University',
		images: ['/og-image.jpg'],
	},
	icons: {
		icon: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
	viewport: 'width=device-width, initial-scale=1',
	robots: 'index, follow'
}

const schemaData = {
	"@context": "https://schema.org",
	"@type": schema.type,
	"url": "https://" + baseURL,
	"logo": schema.logo,
	"name": schema.name,
	"description": schema.description,
	"email": schema.email,
	"sameAs": Object.values(social).filter(Boolean)
};

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<Flex
			as="html" lang="en"
			fillHeight background="page"
			data-neutral={style.neutral} data-brand={style.brand} data-accent={style.accent}
			data-border={style.border} data-theme={style.theme}
			data-solid={style.solid} data-solid-style={style.solidStyle}
			data-surface={style.surface} data-transition={style.transition}
			data-scaling={style.scaling}
			className={classNames(
				primary.variable, code.variable,
				secondary ? secondary.variable : '',
				tertiary ? tertiary.variable : ''
			)}>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
				/>
			</head>
			<Flex
				as="body"
				fillWidth fillHeight margin="0" padding="0">
				<Background
					style={{zIndex: '-1'}}
					position="fixed"
					mask="cursor"
					dots={{
						display: true,
						opacity: 0.9,
						size: '20'
					}}
					gradient={{
						display: true,
						opacity: 0.4,
					}}/>
				<Flex
					flex={1} direction="column">
					{children}
				</Flex>
			</Flex>
		</Flex>
	);
}
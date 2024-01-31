'use client';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet';

import { usePathname } from 'next/navigation';

import { Menu } from 'lucide-react';

const links = [
	{ label: 'Home', link: '/' },
	{ label: 'News', link: '/news' },
	{ label: 'About Us', link: '/about' },
];
const Navbar = () => {
	const path = usePathname();

	return (
		<header className="z-50  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full ">
			<nav className=" flex gap-6 h-14 mx-5 sm:mx-10 2xl:mx-auto 2xl:w-[1400px] items-center justify-between ">
				<Link href={'/'} className=" ">
					<span className="text-primary/60 hover:text-primary transition-colors">
						AliFoundation
					</span>
				</Link>
				<ul className="flex justify-center gap-2 sm:gap-6 items-center  flex-1">
					<SheetDemo />

					<div className="hidden sm:flex gap-6  -ml-20 md:-ml-40">
						{links.map((item) => {
							return (
								<li key={item.link}>
									<Link
										href={item.link}
										className={`${
											item.link === path
												? 'text-primary'
												: 'text-muted-foreground'
										} hover:text-primary transition-colors`}
									>
										{item.label}
									</Link>
								</li>
							);
						})}
					</div>
				</ul>
			</nav>
		</header>
	);
};

export function SheetDemo() {
	const path = usePathname();
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button className="absolute sm:hidden p-0 right-4" variant="ghost">
					<Menu className="h-8 w-8" />
				</Button>
			</SheetTrigger>
			<SheetContent
				side={'right'}
				className="flex flex-col border-border sm:hidden w-60 "
			>
				{links.map((item) => {
					return (
						<li key={item.link} className="list-none w-full text-left ">
							<SheetClose asChild>
								<Link
									href={item.link}
									className={`${
										item.link === path
											? 'text-primary'
											: 'text-muted-foreground'
									} hover:text-primary transition-colors px-2 py-1  rounded-md w-full`}
								>
									{item.label}
								</Link>
							</SheetClose>
						</li>
					);
				})}
			</SheetContent>
		</Sheet>
	);
}

export default Navbar;

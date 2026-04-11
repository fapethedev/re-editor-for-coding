"use client";

import * as React from "react";
import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";

import {Button} from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function ModeToggle({
	className,
	size = "icon-sm",
	variant = "ghost",
	...props
}: React.ComponentPropsWithoutRef<typeof Button>
) {
	const {theme, setTheme} = useTheme();

	const onThemeChange = () => {
		if (theme === "light") setTheme("dark");
		else setTheme("light");
	};

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button id="mode-toggle-button" aria-label="Mode Toggle Button" onClick={onThemeChange} variant={variant} size={size} className={cn(" ", className)} {...props}>
					<Sun className="h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"/>
					<Moon className="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"/>
					<span className="sr-only">Toggle dark mode</span>
				</Button>
			</TooltipTrigger>
				<TooltipContent side="bottom">
					<p className="font-mono">
						Press <kbd>d</kbd> to toggle dark mode
					</p>
				</TooltipContent>
		</Tooltip>
    );
}

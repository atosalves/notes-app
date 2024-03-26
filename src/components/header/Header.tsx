import { useEffect, useState } from "react";

const Header = () => {
	const [theme, setTheme] = useState(() => {
		const data = localStorage.getItem("theme");
		return data || "";
	});

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	function themeHandle() {
		setTheme((prevTheme) => (prevTheme === "dark" ? "" : "dark"));
	}

	return (
		<header className="flex flex-col space-y-5">
			<div className="p-3 flex justify-between">
				<h1 className="text-4xl text-center font-bold">Notes App</h1>
				<button onClick={themeHandle}>
					{theme ? (
						<span className="material-symbols-outlined">light_mode</span>
					) : (
						<span className="material-symbols-outlined">dark_mode</span>
					)}
				</button>
			</div>
		</header>
	);
};

export default Header;

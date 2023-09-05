import ThemeSwitch from "@ui/ThemeSwitch";
import CardLayout from "@layouts/Card.layout";

function NavBar({}) {
	return (
		<header className="z-[1000] w-full items-center justify-center flex flex-col  bottom-[8%] fixed">
			<CardLayout className="w-fit py-5 flex gap-2 items-center bg-bg-50 dark:bg-bg-dark-50 bg-opacity-20 backdrop-blur">
				Hello guys, I'm Jesulonimi, a software engineer.
				<ThemeSwitch icon />
			</CardLayout>
		</header>
	);
}

export default NavBar;
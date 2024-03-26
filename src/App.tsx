import Header from "./components/header/Header";
import Main from "./components/main/Main";

const App = () => {
	return (
		<div className="flex flex-col justify-center items-center space-y-5 h-screen dark:bg-black dark:text-white">
			<div className="w-3/4 md:w-2/3 bg-gray-300 p-3 rounded-xl shadow-lg dark:bg-zinc-800 ">
				<Header />
				<Main />
			</div>
		</div>
	);
};

export default App;

import { Button, MantineProvider } from "@mantine/core";
import "./assets/css/index.css";

const RootApp = () => {
	return (
		<MantineProvider>
			<div>RootApp</div>
			<Button variant="filled" className="ms-3">
				Test
			</Button>
		</MantineProvider>
	);
};

export default RootApp;

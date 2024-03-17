import { Button, MantineProvider } from "@mantine/core";
import "./assets/css/index.css";
import CustomButton from "./component/CustomButton";

const RootApp = () => {
	const buttonOnPress = () => {
		console.log("pressed");
	};
	return (
		<>
			<MantineProvider>
				<Button variant="primary">Mantine Button</Button>
			</MantineProvider>
			<div>RootApp</div>
			{/* <Button></Button> */}
			<CustomButton color={"danger"} onPress={buttonOnPress}>
				Test Button
			</CustomButton>
			<CustomButton color={"primary"} onPress={buttonOnPress}>
				Test Button
			</CustomButton>
			<CustomButton color={"secondary"} onPress={buttonOnPress}>
				Test Button
			</CustomButton>
			<CustomButton color={"success"} onPress={buttonOnPress}>
				Test Button
			</CustomButton>
		</>
	);
};

export default RootApp;

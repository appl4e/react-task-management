import { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	color: string;
	onPress: () => void;
}

const CustomButton = ({ children, color, onPress }: ButtonProps) => {
	const btnClasses = `btn-${color} hover:bg-sky-700 px-4 pt-1 pb-2 text-white rounded-md`;
	return (
		<button type="button" className={btnClasses} onClick={onPress}>
			{children}
		</button>
	);
};

export default CustomButton;

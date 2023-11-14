interface IProps {
	children: React.ReactNode;
	title: string;
}
export const Wrapper = ({ children, title }: IProps) => {
	return (
		<fieldset className="border border-slate-500 w-[40rem] p-4 rounded shadow-lg mb-4">
			<legend className="font-semibold">{title}</legend>
			{children}
		</fieldset>
	);
};

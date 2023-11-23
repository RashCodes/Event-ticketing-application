import React from "react";

const Footer = () => {
	return (
		<div className='w-full bg-[#edc16a] flex flex-col space-y-4 items-center justify-center p-6'>
			<p>
				{" "}
				Powered by{" "}
				<a
					href=''
					target='_blank'
					className='text-[#705a2f]'
				>
					Alia Osama 
				</a>
			</p>
			<p className='opacity-50 text-sm'>
				&copy; Copyright @CityU {new Date().getFullYear()}
			</p>
		</div>
	);
};

export default Footer;

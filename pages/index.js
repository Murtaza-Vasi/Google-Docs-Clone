import Head from 'next/head';
import Image from 'next/image';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';

import Header from '../components/Header';

export default function Home() {
	return (
		<div className=''>
			<Head>
				<title>Google Docs Home</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			<section className='bg-[#F8F9FA] pb-10 px-10'>
				<div className='max-w-3xl mx-auto'>
					<div className='py-6 flex items-center justify-between'>
						<h2 className='text-gray-700 text-lg'>Start a new document</h2>
						<Button
							color='gray'
							buttonType='outline'
							iconOnly={true}
							ripple='dark'
							className='border-0'
						>
							<Icon name='more_vert' size='3xl' />
						</Button>
					</div>
					<div>
						<div className='relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700'>
							<Image src='https://links.papareact.com/pju' layout='fill' />
						</div>
						<p className='ml-2 mt-2 font-semibold text-sm text-gray-700'>
							Blank
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}

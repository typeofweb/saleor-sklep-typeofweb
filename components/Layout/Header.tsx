import { ChangeEventHandler, Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useAllPagesContext } from '../AllPagesContext';
import { ShoppingCartStatus } from './ShoppingCartStatus';
import { useIntl } from 'react-intl';

export const Header = () => {
	const [open, setOpen] = useState(false);

	// @todo fetch these
	const navigation = {
		pages: [
			{ name: 'Company', href: '#' },
			{ name: 'Stores', href: '#' },
		],
	};

	const {
		userChannel: { setSelectedChannelSlug, selectedChannel, channels },
	} = useAllPagesContext();

	const handleCurrencyChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
		setSelectedChannelSlug(e.currentTarget.value);
	};

	const intl = useIntl();

	return (
		<>
			{/* Mobile menu */}
			<Transition.Root
				show={open}
				as={Fragment}
			>
				<Dialog
					as="div"
					className="relative z-40 lg:hidden"
					onClose={setOpen}
				>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 flex z-40">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<Dialog.Panel className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
								<div className="px-4 pt-5 pb-2 flex">
									<button
										type="button"
										className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
										onClick={() => setOpen(false)}
									>
										<span className="sr-only">
											{intl.formatMessage({
												defaultMessage: 'Close menu',
												id: 'dg8ZEb',
											})}
										</span>
										<XIcon
											className="h-6 w-6"
											aria-hidden="true"
										/>
									</button>
								</div>

								<div className="border-t border-gray-200 py-6 px-4 space-y-6">
									{navigation.pages.map((page) => (
										<div
											key={page.name}
											className="flow-root"
										>
											<a
												href={page.href}
												className="-m-2 p-2 block font-medium text-gray-900"
											>
												{page.name}
											</a>
										</div>
									))}
								</div>

								<div className="border-t border-gray-200 py-6 px-4 space-y-6">
									{/* Currency selector */}
									<form>
										<div className="inline-block">
											<label
												htmlFor="mobile-currency"
												className="sr-only"
											>
												{intl.formatMessage({
													defaultMessage: 'Currency',
													id: '55hdQy',
												})}
											</label>
											<div className="-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
												<select
													id="mobile-currency"
													name="currency"
													className="bg-none border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-gray-700 group-hover:text-gray-800 focus:outline-none focus:ring-0 focus:border-transparent"
													value={selectedChannel.slug}
													onChange={handleCurrencyChange}
												>
													{channels.map((channel) => (
														<option
															key={channel.id}
															value={channel.slug}
														>
															{channel.currencyCode}
														</option>
													))}
												</select>
												<div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
													<svg
														aria-hidden="true"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 20 20"
														className="w-5 h-5 text-gray-500"
													>
														<path
															stroke="currentColor"
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="1.5"
															d="M6 8l4 4 4-4"
														/>
													</svg>
												</div>
											</div>
										</div>
									</form>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>

			<header className="relative">
				<nav aria-label="Top">
					{/* Top navigation */}
					<div className="bg-gray-900">
						<div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
							{/* Currency selector */}
							<form className="hidden md:block md:flex-1">
								<div className="flex">
									<label
										htmlFor="desktop-currency"
										className="sr-only"
									>
										{intl.formatMessage({
											defaultMessage: 'Currency',
											id: '55hdQy',
										})}
									</label>
									<div className="-ml-2 group relative bg-gray-900 border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
										<select
											id="desktop-currency"
											name="currency"
											className="bg-none bg-gray-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent"
											value={selectedChannel.slug}
											onChange={handleCurrencyChange}
										>
											{channels.map((channel) => (
												<option
													key={channel.id}
													value={channel.slug}
												>
													{channel.currencyCode}
												</option>
											))}
										</select>
										<div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
											<svg
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 20 20"
												className="w-5 h-5 text-gray-300"
											>
												<path
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.5"
													d="M6 8l4 4 4-4"
												/>
											</svg>
										</div>
									</div>
								</div>
							</form>

							<p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
								{intl.formatMessage({
									defaultMessage: `Get free delivery on orders over`,
									id: 'lvqxJ+',
								})}{' '}
								{intl.formatNumber(100, {
									style: 'currency',
									currency: selectedChannel.currencyCode,
								})}
							</p>
						</div>
					</div>

					{/* Secondary navigation */}
					<div className="bg-white">
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="border-b border-gray-200">
								<div className="h-16 flex items-center justify-between">
									{/* Logo (lg+) */}
									<div className="hidden lg:flex lg:items-center">
										<Link href="/">
											<a>
												<span className="sr-only">
													{intl.formatMessage({
														defaultMessage: 'Sklep Type of Web - strona główna',
														id: '2woeKq',
													})}
												</span>
												<img
													className="h-8 w-auto"
													src="https://tailwindui.com/img/logos/workflow-mark.svg?color=green&shade=600"
													alt=""
												/>
											</a>
										</Link>
									</div>

									<div className="hidden h-full lg:flex">
										{/* Mega menus */}
										<div className="ml-8">
											<div className="h-full flex justify-center space-x-8">
												{navigation.pages.map((page) => (
													<a
														key={page.name}
														href={page.href}
														className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
													>
														{page.name}
													</a>
												))}
											</div>
										</div>
									</div>

									{/* Mobile menu and search (lg-) */}
									<div className="flex-1 flex items-center md:hidden">
										<button
											type="button"
											className="-ml-2 bg-white p-2 rounded-md text-gray-400"
											onClick={() => setOpen(true)}
										>
											<span className="sr-only">
												{intl.formatMessage({
													defaultMessage: 'Open menu',
													id: 'bdcMGy',
												})}
											</span>
											<MenuIcon
												className="h-6 w-6"
												aria-hidden="true"
											/>
										</button>
									</div>

									{/* Logo (lg-) */}
									<Link href="/">
										<a className="lg:hidden">
											<span className="sr-only">
												{intl.formatMessage({
													defaultMessage: 'Sklep Type of Web - strona główna',
													id: '2woeKq',
												})}
											</span>
											<img
												src="https://tailwindui.com/img/logos/workflow-mark.svg?color=green&shade=600"
												alt=""
												className="h-8 w-auto"
											/>
										</a>
									</Link>

									<ShoppingCartStatus />
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};

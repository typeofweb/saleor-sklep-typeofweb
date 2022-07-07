export function CheckoutListEmpty() {
	return (
		<div className="bg-white">
			<div className="max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
				<h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
					Shopping Cart
				</h1>

				<form className="mt-12">
					<div>
						<h2 className="sr-only">Items in your shopping cart</h2>

						<p
							role="list"
							className="border border-gray-200"
						>
							You don&apos;t have any items in your cart
						</p>
					</div>
				</form>
			</div>
		</div>
	);
}

import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import { ShopFilters } from "@components/shop/filters";
import StickyBox from "react-sticky-box";
import { ProductGrid } from "@components/product/product-grid";
import SearchTopBar from "@components/shop/top-bar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useBrandsQuery } from "@framework/brand/get-all-brands";
import { useState } from "react";
import { useRouter } from "next/router";

export default function BrandsPage() {
	const { data, isLoading } = useBrandsQuery({
		limit: 50,
	});
	const router = useRouter();
	const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

	const handleBrandClick = (slug: string) => {
		setSelectedBrand(slug);
		router.push(`/search?brand=${slug}`);
	};

	const brands = data?.brands || [];

	if (selectedBrand) {
		return (
			<>
				<Container>
					<div className={`flex pt-8 pb-16 lg:pb-20`}>
						<div className="flex-shrink-0 pe-24 hidden lg:block w-96">
							<StickyBox offsetTop={50} offsetBottom={20}>
								<ShopFilters />
							</StickyBox>
						</div>
						<div className="w-full lg:ps-7 lg:-ms-2">
							<SearchTopBar />
							<ProductGrid />
						</div>
					</div>
				</Container>
			</>
		);
	}

	return (
		<>
			<Container>
				<div className="pt-8 pb-16 lg:pb-20">
					<div className="mb-12 text-center">
						<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-heading mb-4">
							Perfume Brands
						</h1>
						<p className="text-base text-body">
							Explore our collection of luxury perfume brands
						</p>
					</div>

					{isLoading ? (
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5 xl:gap-7">
							{Array.from({ length: 11 }).map((_, idx) => (
								<div
									key={idx}
									className="animate-pulse bg-gray-200 rounded-lg h-64"
								/>
							))}
						</div>
					) : (
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5 xl:gap-7">
							{brands.map((brand: any) => (
								<div
									key={brand.id}
									onClick={() => handleBrandClick(brand.slug)}
									className="cursor-pointer group"
								>
									<div className="relative overflow-hidden rounded-lg bg-gray-100 hover:shadow-lg transition-shadow duration-300">
										<div className="aspect-square flex items-center justify-center p-8">
											<div className="text-center">
												<h3 className="text-lg font-semibold text-heading mb-2 group-hover:text-accent transition-colors">
													{brand.name}
												</h3>
												{brand.productCount && (
													<p className="text-sm text-body">
														{brand.productCount} perfumes
													</p>
												)}
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</Container>
		</>
	);
}

BrandsPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale!, [
				"common",
				"forms",
				"menu",
				"footer",
			])),
		},
	};
};

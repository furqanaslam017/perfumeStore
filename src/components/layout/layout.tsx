import { NextSeo } from "next-seo";
import Header from "@components/layout/header/header";
import Footer from "@components/layout/footer/footer";
import MobileNavigation from "@components/layout/mobile-navigation/mobile-navigation";
import Search from "@components/common/search";
import CookieBar from "@components/common/cookie-bar";
import SocialProofNotification from "@components/common/social-proof-notification";
import { useAcceptCookies } from "@utils/use-accept-cookies";
import Button from "@components/ui/button";
import { useTranslation } from "next-i18next";

const Layout: React.FC = ({ children }) => {
	const { acceptedCookies, onAcceptCookies } = useAcceptCookies();
	const { t } = useTranslation("common");
	return (
		<div className="flex flex-col min-h-screen">
			<NextSeo
				additionalMetaTags={[
					{
						name: "viewport",
						content: "width=device-width, initial-scale=1.0",
					},
				]}
				title="ROYAL Perfume - Premium Designer Fragrances"
				description="Discover luxury perfumes and designer fragrances for men, women and unisex. Shop authentic perfumes from top brands with fast delivery."
				canonical="https://royalperfume.com/"
				openGraph={{
					url: "https://royalperfume.com",
					title: "ROYAL Perfume - Premium Designer Fragrances",
					description:
						"Discover luxury perfumes and designer fragrances for men, women and unisex. Shop authentic perfumes from top brands with fast delivery.",
					images: [
						{
							url: "/Royal perfume logo.jpg",
							width: 800,
							height: 600,
							alt: "ROYAL Perfume",
						},
					],
				}}
			/>
			<Header />
			<main
				className="relative flex-grow"
				style={{
					minHeight: "-webkit-fill-available",
					WebkitOverflowScrolling: "touch",
				}}
			>
				{children}
			</main>
			<Footer />
			<MobileNavigation />
			<Search />
			<SocialProofNotification />
			<CookieBar
				title={t("text-cookies-title")}
				hide={acceptedCookies}
				action={
					<Button onClick={() => onAcceptCookies()} variant="slim">
						{t("text-accept-cookies")}
					</Button>
				}
			/>
		</div>
	);
};

export default Layout;

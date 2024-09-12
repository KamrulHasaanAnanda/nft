import Image from "next/image";
import HeaderComponent from "../components/layout/HeaderComponent";
import TopSection from "@/components/layout/sections/topSection/TopSection";
import NoticeSection from "@/components/layout/sections/noticeSection/NoticeSection";
import CollectionSection from "@/components/layout/sections/collectionSection/CollectionSection";
import CollectionFeatures from "@/components/layout/sections/collectionFeatures/CollectionFeatures";
import CreateSellNftsSection from "@/components/layout/sections/createSellNftsSection/CreateSellNftsSection";
import DiscoverSection from "@/components/layout/sections/discoverSection/DiscoverSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <TopSection />
      <NoticeSection />
      <CollectionSection />
      <CollectionFeatures />
      <CreateSellNftsSection />
      <DiscoverSection />
      <Footer />


    </>
  );
}

import Image from "next/image";
import HeaderComponent from "../components/header/HeaderComponent";
import TopSection from "@/components/sections/topSection/TopSection";
import NoticeSection from "@/components/sections/noticeSection/NoticeSection";
import CollectionSection from "@/components/sections/collectionSection/CollectionSection";
import CollectionFeatures from "@/components/sections/collectionFeatures/CollectionFeatures";
import CreateSellNftsSection from "@/components/sections/createSellNftsSection/CreateSellNftsSection";
import DiscoverSection from "@/components/sections/discoverSection/DiscoverSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      {/* <TopSection /> */}
      <NoticeSection />
      <CollectionSection />
      <CollectionFeatures />
      <CreateSellNftsSection />
      <DiscoverSection />
      <Footer />


    </>
  );
}

import Image from "next/image";
import HeaderComponent from "../components/layout/header/HeaderComponent";
import TopSection from "@/components/layout/sections/topSection/TopSection";
import NoticeSection from "@/components/layout/sections/noticeSection/NoticeSection";
import CollectionSection from "@/components/layout/sections/collectionSection/CollectionSection";
import CollectionFeatures from "@/components/layout/sections/collectionFeatures/CollectionFeatures";
import CreateSellNftsSection from "@/components/layout/sections/createSellNftsSection/CreateSellNftsSection";
import DiscoverSection from "@/components/layout/sections/discoverSection/DiscoverSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className=" px-5 sm:px-10 md:px-16">
      <HeaderComponent />
      {/* <TopSection />
      <NoticeSection />
      <CollectionSection />
      <CollectionFeatures />
      <CreateSellNftsSection />
      <DiscoverSection /> */}
      <Footer />


    </div>
  );
}

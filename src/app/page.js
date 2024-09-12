import Image from "next/image";
import HeaderComponent from "../components/layout/HeaderComponent";
import TopSection from "@/components/layout/sections/topSection/TopSection";
import NoticeSection from "@/components/layout/sections/noticeSection/NoticeSection";
import CollectionSection from "@/components/layout/sections/collectionSection/CollectionSection";
import CollectionFeatures from "@/components/layout/sections/collectionFeatures/CollectionFeatures";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <TopSection />
      <NoticeSection />
      <CollectionSection />
      <CollectionFeatures />



      <h1 className="font-integral font-medium">Integral CF Medium</h1>
      <h2 className="font-integral font-bold">Integral CF Bold</h2>
      <h3 className="font-integral font-extrabold">Integral CF ExtraBold</h3>

      <p className="font-dm-sans font-normal">DM Sans Normal</p>
      <p className="font-dm-sans font-medium">DM Sans Medium</p>

    </>
  );
}

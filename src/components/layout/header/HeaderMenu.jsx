
import { Button } from "@/components/ui/button"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MdOutlineMenu } from "react-icons/md";
import HeaderSearchInput from "./HeaderSearchInput";





function HeaderMenu({ navItems }) {

    return (
        <Sheet>
            <SheetTrigger asChild>
                <MdOutlineMenu className="block md:hidden text-lg text-black" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <h1 className="text-[#3D00B7] font-integral text-2xl font-bold">
                            NFters
                        </h1>
                    </SheetTitle>

                </SheetHeader>
                <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-7 mt-4 lg:mt-0">
                    {navItems.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <div className={`w-full lg:w-auto flex flex-col lg:flex-row items-center gap-3 mt-4 lg:mt-0`}>
                    <HeaderSearchInput />
                    <Button
                        className="rounded-[60px] bg-[#3D00B7] text-white font-dm-sans text-sm font-bold leading-none tracking-[0.56px] h-[50px] w-full lg:w-24 hover:bg-[#2A0080] hover:shadow-lg mt-3 lg:mt-0"
                    >
                        Upload
                    </Button>
                    <Button
                        className="rounded-[60px] border-2 border-[#3D00B7] font-dm-sans text-sm font-bold leading-none tracking-[0.56px] h-[50px] w-full lg:min-w-[140px] bg-white text-[#3D00B7] p-0 hover:bg-[#3D00B7] hover:text-white mt-3 lg:mt-0"
                    >
                        Connect Wallet
                    </Button>
                </div>
                <SheetFooter>
                    {/* <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose> */}
                </SheetFooter>
            </SheetContent>
        </Sheet>

    )
}

export default HeaderMenu
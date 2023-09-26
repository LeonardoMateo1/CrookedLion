import Image from "next/image";
import StockNewsDashboard from "./components/StockNewsDashboard";
import { UserNavbar } from "@/components";


export default function page() {
  return (
    <main className="w-full mt-[10rem] flex">
      <UserNavbar/>
      <div className="h-full w-full max-width">
        <StockNewsDashboard />
      </div>
    </main>
  )
}

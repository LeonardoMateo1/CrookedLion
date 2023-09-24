import Image from "next/image";
import dynamic from 'next/dynamic';
import NewsList from "./components/NewsList";

const StockCharts = dynamic(() => import('./components/StockCharts'), {
  ssr: false,
})

export default function page() {
  return (
    <main className="w-full mt-[10rem] flex">
      <div className="h-full w-full max-width">
          {/* <StockCharts symbol="ibm" /> */}
          <NewsList symbol="ibm"/>
      </div>
    </main>
  )
}

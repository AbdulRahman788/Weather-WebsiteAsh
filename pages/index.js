import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
       <div>
            <div>
                <h2 className="text-xl font-medium text-center title-font text-gray-900 mt-0">"Your Personalized Weather Experience, Tailored Just for You!"</h2> </div>
            <div className="w-full h-full">
                <iframe
                    title="Weather Map"
                    src="https://embed.windy.com/embed2.html?lat=17.425&lon=78.507&detailLat=17.425&detailLon=78.507&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=true&calendar=12&pressure=true&type=map&location=coordinates&detail=&metricWind=mph&metricTemp=%C2%B0C&radarRange=-1"
                    frameBorder="0"
                    className="absolute  h-full w-full"
                ></iframe>
            </div>
        </div>
    </main>
  )
}

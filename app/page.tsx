import Button from "@/components/Button";
import { rgbDataURL } from "@/utils/rgbDataUrl";
import Image from "next/image";

export default function Home() {
  return (
    <main className="dark flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        placeholder="blur"
        blurDataURL={rgbDataURL(180, 180, 180)}
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="https://www.pixelstalk.net/wp-content/uploads/images6/Android-1080x1920p-Wallpaper.jpg"
        alt="Next.js Logo"
        width={200}
        height={200}
        priority
      />
      <Button />
    </main>
  );
}

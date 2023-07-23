"use client";
import Button from "@/components/Button";
import { rgbDataURL } from "@/utils/rgbDataUrl";
import Image from "next/image";
import { useEffect, useState } from "react";
import cn from "classnames";
import authService from "@/services/auth.service";
import { IUser } from "@/types/user.type";
import { CommonResponse } from "@/types/common.type";
interface Props {
  name: string;
}

export default function Home() {
  const [themeMode, setThemeMode] = useState(false);
  const [user, setUser] = useState<IUser[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await authService.get<Props, IUser[]>();
        setUser(res);
      } catch (error) {}
    })();
  }, []);
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col items-center justify-between p-24",
        {
          dark: themeMode,
          light: !themeMode,
        }
      )}
    >
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
      {user.map((item) => {
        return (
          <div key={item._id} className="mb-3 shadow-sm">
            <p>{item.fullname}</p>
          </div>
        );
      })}
      <Button onClick={() => setThemeMode((prev) => !prev)} />
    </div>
  );
}

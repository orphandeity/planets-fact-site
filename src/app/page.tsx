"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  // immediately redirect to Mercury page
  router.push("/mercury");

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

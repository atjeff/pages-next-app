import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";



const Page: NextPage = () => {
    const [currentTab, setCurrentTab] = useState<string>('details');
    const router = useRouter();
    const { userId } = router.query;
  
    return (
        <h1>This is member #{userId}</h1>
    )
}

export default Page;

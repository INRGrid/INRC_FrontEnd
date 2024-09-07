import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ScrollToTop = () => {
    const router = useRouter();
    const { pathname } = router;

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return <></>
}

export default ScrollToTop;
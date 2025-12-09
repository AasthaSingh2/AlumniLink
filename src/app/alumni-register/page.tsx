'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AlumniRegisterPage() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to the register page with alumni tab selected
        router.replace('/register?tab=alumni');
    }, [router]);

    return null; // This will be replaced by the redirect
}

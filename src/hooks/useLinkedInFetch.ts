import { useState } from 'react';

export interface LinkedInProfileData {
    name?: string;
    headline?: string;
    currentPosition?: string;
    company?: string;
    profileImage?: string;
    linkedinUrl?: string;
}

export const useLinkedInFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [profileData, setProfileData] = useState<LinkedInProfileData | null>(null);

    const fetchLinkedInData = async (linkedinUrl: string) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/linkedin/fetch', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ linkedinUrl }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch LinkedIn data');
            }

            const data = await response.json();
            setProfileData(data);
            return data;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to fetch LinkedIn data';
            setError(errorMessage);
            console.error('Error fetching LinkedIn data:', err);
            return null;
        } finally {
            setIsLoading(false);
        }
    };

    return { fetchLinkedInData, isLoading, error, profileData };
};

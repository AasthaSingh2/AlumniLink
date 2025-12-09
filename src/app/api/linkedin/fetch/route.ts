import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { linkedinUrl } = await request.json();

        if (!linkedinUrl) {
            return NextResponse.json(
                { error: 'LinkedIn URL is required' },
                { status: 400 }
            );
        }

        const response = await fetch(
            `https://nubela.co/proxycurl/api/v2/linkedin?url=${encodeURIComponent(linkedinUrl)}`,
            {
                headers: {
                    'Authorization': `Bearer ${process.env.PROXYCURL_API_KEY}`,
                    'Accept': 'application/json'
                }
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch LinkedIn data');
        }

        const data = await response.json();

        // Extract only the fields we need
        const profileData = {
            name: data.full_name,
            headline: data.headline,
            currentPosition: data.occupation,
            company: data.experience?.[0]?.company,
            profileImage: data.profile_pic_url,
            linkedinUrl: data.linkedin_url
        };

        return NextResponse.json(profileData);
    } catch (error) {
        console.error('LinkedIn API error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch LinkedIn data' },
            { status: 500 }
        );
    }
}

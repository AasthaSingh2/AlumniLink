'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Linkedin } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { generateLinkedInProfile, type LinkedInProfile } from '@/lib/linkedInProfileGenerator';

interface LinkedInImportProps {
    onDataFetched: (data: LinkedInProfile) => void;
    className?: string;
}

export function LinkedInImport({ onDataFetched, className = '' }: LinkedInImportProps) {
    const [linkedinUrl, setLinkedinUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [previewData, setPreviewData] = useState<LinkedInProfile | null>(null);

    const handleFetch = async () => {
        if (!linkedinUrl) {
            setError('Please enter a LinkedIn profile URL');
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            // Simulate API call with a small delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Generate profile data locally
            const data = generateLinkedInProfile(linkedinUrl);
            setPreviewData(data);
            onDataFetched(data);
        } catch (err) {
            console.error('Error generating profile:', err);
            setError('Failed to generate profile. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`space-y-4 ${className}`}>
            <div className="flex flex-col sm:flex-row gap-2">
                <Input
                    type="url"
                    placeholder="Paste your LinkedIn profile URL"
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    className="flex-1"
                    disabled={isLoading}
                />
                <Button
                    onClick={handleFetch}
                    disabled={isLoading || !linkedinUrl}
                    className="bg-blue-600 hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Fetching...
                        </>
                    ) : (
                        <>
                            <Linkedin className="mr-2 h-4 w-4" />
                            Import from LinkedIn
                        </>
                    )}
                </Button>
            </div>

            {error && (
                <Alert variant="destructive" className="mt-2">
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            {previewData && (
                <div className="mt-4 p-4 border rounded-lg bg-muted/50">
                    <h4 className="font-medium mb-2">Preview:</h4>
                    <div className="space-y-3">
                        <div>
                            <p className="font-semibold">{previewData.name}</p>
                            <p className="text-sm text-muted-foreground">{previewData.headline}</p>
                        </div>

                        <div>
                            <p className="text-sm font-medium">Current Position</p>
                            <p className="text-sm">
                                {previewData.current_position} at {previewData.current_company}
                            </p>
                        </div>

                        {previewData.skills.length > 0 && (
                            <div>
                                <p className="text-sm font-medium mb-1">Top Skills</p>
                                <div className="flex flex-wrap gap-2">
                                    {previewData.skills.slice(0, 5).map((skill, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

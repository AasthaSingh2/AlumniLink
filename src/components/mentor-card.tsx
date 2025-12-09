'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, MessageSquare, Briefcase, Award, GraduationCap } from 'lucide-react';
import { LinkedInProfile } from '@/lib/linkedInProfileGenerator';
import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface Experience {
    role: string;
    company: string;
    duration: string;
}

interface MentorCardProps {
    name: string;
    title: string;
    expertise: string;
    matchScore: number;
    bio: string;
    linkedInUrl?: string;
    className?: string;
}

export function MentorCard({
    name,
    title,
    expertise,
    matchScore,
    bio,
    linkedInUrl,
    className
}: MentorCardProps) {
    const [isLoading, setIsLoading] = useState(!!linkedInUrl);
    const [profileData, setProfileData] = useState<Partial<LinkedInProfile> | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLinkedInData = async () => {
            if (!linkedInUrl) {
                setIsLoading(false);
                return;
            }

            try {
                setIsLoading(true);
                setError(null);

                // Simulate API call with timeout
                await new Promise(resolve => setTimeout(resolve, 800));

                // Use the generator for demo purposes
                const { generateLinkedInProfile } = await import('@/lib/linkedInProfileGenerator');
                const data = generateLinkedInProfile(linkedInUrl);
                setProfileData(data);
            } catch (err) {
                console.error('Error fetching LinkedIn data:', err);
                setError('Failed to load LinkedIn profile data');
            } finally {
                setIsLoading(false);
            }
        };

        fetchLinkedInData();
    }, [linkedInUrl]);

    const displayData = {
        name,
        current_position: title.split(' at ')[0] || title,
        current_company: title.split(' at ')[1] || '',
        profile_summary: bio,
        skills: expertise.split(',').map(skill => skill.trim()).filter(Boolean),
        past_experience: [] as Experience[],
        ...profileData
    };

    const renderLoadingSkeleton = () => (
        <div className="space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
        </div>
    );

    return (
        <Card className={cn("w-full max-w-4xl mx-auto overflow-hidden transition-all hover:shadow-lg", className)}>
            <div className="md:flex">
                {/* Left Column - Profile Info */}
                <div className="md:w-1/3 bg-muted/50 p-6 flex flex-col items-center">
                    <div className="relative mb-4">
                        <Avatar className="h-32 w-32 border-4 border-background shadow-md">
                            {isLoading ? (
                                <Skeleton className="h-full w-full" />
                            ) : (
                                <>
                                    <AvatarImage
                                        src={displayData.profileImage}
                                        alt={name}
                                        className="object-cover"
                                    />
                                    <AvatarFallback className="text-2xl bg-primary/10">
                                        {name.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                </>
                            )}
                        </Avatar>
                        <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full h-10 w-10 flex items-center justify-center text-xs font-bold shadow-md">
                            {matchScore}%
                        </div>
                    </div>

                    <div className="text-center space-y-1">
                        <h3 className="font-bold text-xl text-foreground">{name}</h3>
                        <p className="text-sm text-muted-foreground font-medium">
                            {displayData.current_position}
                        </p>
                        <p className="text-sm text-foreground/80">
                            {displayData.current_company}
                        </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2 justify-center w-full">
                        {displayData.skills?.slice(0, 5).map((skill, i) => (
                            <Badge key={i} variant="secondary" className="px-2 py-1 text-xs font-medium">
                                {skill}
                            </Badge>
                        ))}
                        {displayData.skills?.length > 5 && (
                            <Badge variant="outline" className="px-2 py-1 text-xs">
                                +{displayData.skills.length - 5} more
                            </Badge>
                        )}
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full">
                        {linkedInUrl && (
                            <Button
                                variant="outline"
                                size="sm"
                                className="w-full rounded-full"
                                asChild
                            >
                                <a
                                    href={linkedInUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center"
                                >
                                    <Linkedin className="h-4 w-4 mr-2" />
                                    View Profile
                                </a>
                            </Button>
                        )}
                        <Button
                            size="sm"
                            className="w-full rounded-full bg-primary hover:bg-primary/90"
                            disabled={isLoading}
                        >
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Message
                        </Button>
                    </div>
                </div>

                {/* Right Column - Detailed Info */}
                <div className="md:w-2/3 p-6 bg-background">
                    <CardHeader className="p-0 mb-6">
                        <CardTitle className="text-2xl flex items-center">
                            <Briefcase className="h-5 w-5 mr-2 text-primary" />
                            Professional Background
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-2 flex items-center">
                                <GraduationCap className="h-4 w-4 mr-2 text-muted-foreground" />
                                Experience Summary
                            </h4>
                            {isLoading ? (
                                renderLoadingSkeleton()
                            ) : error ? (
                                <p className="text-sm text-muted-foreground">Experience information not available</p>
                            ) : (
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {displayData.profile_summary || 'No summary available.'}
                                </p>
                            )}
                        </div>

                        <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center">
                                <Award className="h-4 w-4 mr-2 text-muted-foreground" />
                                Areas of Expertise
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {isLoading ? (
                                    Array(4).fill(0).map((_, i) => (
                                        <Skeleton key={i} className="h-6 w-20 rounded-full" />
                                    ))
                                ) : displayData.skills?.length ? (
                                    displayData.skills.map((skill, i) => (
                                        <Badge
                                            key={i}
                                            variant="secondary"
                                            className="px-3 py-1 text-xs font-medium"
                                        >
                                            {skill}
                                        </Badge>
                                    ))
                                ) : (
                                    <p className="text-sm text-muted-foreground">No expertise listed</p>
                                )}
                            </div>
                        </div>

                        {(displayData.past_experience?.length > 0 || isLoading) && (
                            <div>
                                <h4 className="font-semibold text-foreground mb-3">Work History</h4>
                                <div className="space-y-4">
                                    {isLoading ? (
                                        <div className="space-y-4">
                                            {[0, 1, 2].map((i) => (
                                                <div key={i} className="space-y-1">
                                                    <Skeleton className="h-5 w-48" />
                                                    <Skeleton className="h-4 w-32" />
                                                    <Skeleton className="h-3 w-24" />
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        displayData.past_experience.map((exp, i) => (
                                            <div key={i} className="border-l-2 border-primary/20 pl-4 py-1">
                                                <p className="font-medium text-foreground">{exp.role}</p>
                                                <p className="text-sm text-muted-foreground">{exp.company}</p>
                                                <p className="text-xs text-muted-foreground/70">{exp.duration}</p>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        )}
                    </CardContent>
                </div>
            </div>
        </Card>
    );
}

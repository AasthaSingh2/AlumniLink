import { redirect } from 'next/navigation';

export default function StudentRegisterPage() {
    // Redirect to the main register page with the student tab selected
    redirect('/register?tab=student');
}

import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex justify-center py-auto mx-auto my-auto">
            <SignIn/>
        </div>
    )
}
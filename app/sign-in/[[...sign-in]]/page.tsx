import { SignIn } from "@clerk/nextjs";

export function generateStaticParams() {
  return [{ "sign-in": [] }];
}

export default function Page() {
  return (
    <div className="flex justify-center py-24">
      <SignIn />
    </div>
  );
}

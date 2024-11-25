import { SignUp } from "@clerk/nextjs";

export function generateStaticParams() {
  return [{ "sign-up": [] }];
}

export default function Page() {
  return (
    <div className="flex justify-center py-24">
      <SignUp />
    </div>
  );
}

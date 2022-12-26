import { SignedIn, SignedOut } from "@nhost/react";
import SignIn from "../components/SignIn";

export default function HomePage() {
  return (
    <div>
      <SignedIn>
        <div>Welcome!</div>
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </div>
  );
}
